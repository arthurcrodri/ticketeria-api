import Ticket from '../models/Ticket.js';

class TicketRepository {
    // Registrar novo ingresso
    async create(ticketData) {
        const ticket = new Ticket(ticketData);
        return await ticket.save();
    }

    // Buscar ingressos de um usuário
    async findByUserId(userId) {
        return await Ticket.find({ usuario: userId }).populate('evento', 'titulo dataEvento local preco');
    }

    // Buscar ingresso por código
    async findByCode(codigo) {
        return await Ticket.findOne({ codigoReserva: codigo }).populate('usuario', 'nome email').populate('evento', 'titulo');
    }

    async findById(id) {
        return await Ticket.findById(id).populate('evento');
    }

    async updateStatus(id, status) {
        return await Ticket.findByIdAndUpdate(id, { status }, { new: true });
    }

    async updateStatusByEventId(eventId, status) {
        return await Ticket.updateMany(
            { evento: eventId },
            { status: status }
        )
    }
}

export default new TicketRepository();
