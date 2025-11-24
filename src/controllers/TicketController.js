import TicketService from '../services/TicketService.js';

class TicketController {
    async purchase(req, res, next) {
        try {
            const ticket = await TicketService.purchase(req.user.id, req.body.eventoId);
            res.status(201).json(ticket);
        } catch (error) {
            next(error);
        }
    }

    async getMyTickets(req, res, next) {
        try {
            const tickets = await TicketService.findMyTickets(req.user.id);
            res.json(tickets);
        } catch (error) {
            next(error);
        }
    }

    async cancel(req, res, next) {
        try {
            const result = await TicketService.cancelTicket(
                req.params.id,
                req.user.id,
                req.user.role
            );
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default new TicketController();
