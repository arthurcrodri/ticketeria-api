import Event from '../models/Event.js';

class EventRepository {
    // Criar um evento
    async create(eventData) {
        const event = new Event(eventData);
        return await event.save();
    }

    // Listar todos os eventos
    async findAll() {
        return await Event.find().populate('criadoPor', 'nome email');
    }

    // Buscar detalhes de um evento
    async findById(id) {
        return await Event.findById(id).populate('criadoPor', 'nome');
    }

    // Atualizar evento
    async update(id, eventData) {
        return await Event.findByIdAndUpdate(id, eventData, { new: true });
    }

    // Deletar evento
    async delete(id) {
        return await Event.findByIdAndDelete(id);
    }

    // Atualizar o estoque de ingressos
    async decrementarEstooque(id, quantidade = 1) {
        return await Event.findByIdAndUpdate(
            id,
            { $inc: { ingressosDisponiveis: -quantidade } },
            { new: true }
        );
    }

    async incrementarEstoque(id, quantidade = 1) {
        return await Event.findByIdAndUpdate(
            id,
            { $inc: { ingressosDisponiveis: quantidade } },
            { new: true }
        );
    }
}

export default new EventRepository();
