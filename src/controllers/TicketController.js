import TicketService from '../services/TicketService.js';

class TicketController {
    async purchase(req, res) {
        try {
            const ticket = await TicketService.purchase(req.user.id, req.body.eventoId);
            res.status(201).json(ticket);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }

    async getMyTickets(req, res) {
        try {
            const tickets = await TicketService.findMyTickets(req.user.id);
            res.json(tickets);
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    }

    async cancel(req, res) {
        try {
            const result = await TicketService.cancelTicket(
                req.params.id,
                req.user.id,
                req.user.role
            );
            res.json(result);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
}

export default new TicketController();
