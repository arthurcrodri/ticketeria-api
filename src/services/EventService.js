import EventRepository from '../repositories/EventRepository.js';
import TicketRepository from '../repositories/TicketRepository.js';
import EventDTO from '../dtos/EventDTO.js';

class EventService {
    async create(eventData, userId) {
        const preparedData = EventDTO.createInput(eventData);
        const dataWithOrganizer = { ...preparedData, criadoPor: userId };
        const event = await EventRepository.create(dataWithOrganizer);
        return EventDTO.eventResponse(event);
    }

    async findAll() {
        const events = await EventRepository.findAll();
        return events.map(event => EventDTO.eventResponse(event));
    }

    async findById(id) {
        const event = await EventRepository.findById(id);
        if (!event) throw new Error('Evento não encontrado');
        return EventDTO.eventResponse(event);
    }

    async update(id, eventData) {
        const currentEvent = await EventRepository.findById(id);
        if (!currentEvent) throw new Error('Evento não encontrado');

        if (eventData.capacidadeTotal !== undefined) {
            const ingressosVendidos = currentEvent.capacidadeTotal - currentEvent.ingressosDisponiveis;
            if (eventData.capacidadeTotal < ingressosVendidos) {
                throw new Error(`Não é possível reduzir a capacidade para ${eventData.capacidadeTotal}. Já existem ${ingressosVendidos} ingressos vendidos.`);
            }

            eventData.ingressosDisponiveis = eventData.capacidadeTotal - ingressosVendidos - ingressosVendidos;
        }

        const updatedEvent = await EventRepository.update(id, eventData);
        return EventDTO.eventResponse(updatedEvent);
    }

    async delete(id) {
        const event = await EventRepository.findById(id);
        if (!event) throw new Error('Evento não encontrado');

        await TicketRepository.updateStatusByEventId(id, 'cancelado');

        await EventRepository.delete(id);

        return { mensagem: 'Evento cancelado. Todos os ingressos associados foram cancelados.' };
    }
}

export default new EventService();
