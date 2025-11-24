import { Router } from 'express';
import TicketController from '../controllers/TicketController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { idValidator } from '../validators/idValidator.js';
import { validateRequest } from '../middlewares/validateRequest.js';

const router = Router();

// Tudo aqui exige login
router.use(protect);

// Comprar Ingresso
router.post(
    '/comprar',
    TicketController.purchase
);

// Listar meus ingressos
router.get('/meus-pedidos', TicketController.getMyTickets);

// Cancelar ingresso
router.post(
    '/cancelar/:id',
    idValidator,
    validateRequest,
    TicketController.cancel
);

export default router;
