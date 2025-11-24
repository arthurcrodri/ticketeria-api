import TicketRepository from '../repositories/TicketRepository.js';
import EventRepository from '../repositories/EventRepository.js';
import TicketDTO from '../dtos/TicketDTO.js';
import { v4 as uuidv4 } from 'uuid';

class TicketService {
    async purchase(userId, eventId) {
        const event = await EventRepository.findById(eventId);
        if (!event) throw new Error('Evento não encontrado');

        if (event.ingressosDisponiveis <= 0) {
            throw new Error('Ingressos esgotados');
        }

        await EventRepository.decrementarEstoque(eventId, 1);

        const ticketData = {
            usuario: userId,
            evento: eventId,
            codigoReserva: `TKT-${Date.now()}-${Math.floor(Math.random() * 1000)}`
        };

        const ticket = await TicketRepository.create(ticketData);

        const ticketPopulated = await TicketRepository.findByCode(ticket.codigoReserva);
        return TicketDTO.ticketResponse(ticketPopulated);
    }

    async findMyTickets(userId) {
        const tickets = await TicketRepository.findByUserId(userId);
        return tickets.map(t => TicketDTO.ticketResponse(t));
    }

    async cancelTicket(ticketId, userId, userRole) {
        const ticket = await TicketRepository.findById(ticketId);
        if (!ticket) throw new Error('Ingresso não encontrado');

        if (userRole !== 'admin' && ticket.usuario.toString() !== userId) {
            throw new Error('Você não tem permissão para cancelar este ingresso');
        }

        if (ticket.status !== 'ativo') {
            throw new Error('Este ingresso já foi utilizado ou cancelado');
        }

        await TicketRepository.updateStatus(ticketId, 'cancelado');
        if (ticket.evento) {
            await EventRepository.incrementarEstoque(ticket.evento._id, 1);
        }

        return { mensagem: 'Ingresso cancelado com sucesso e reembolso proocessado.' };
    }
}

export default new TicketService();
