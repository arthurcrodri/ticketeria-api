import { Router } from 'express';
import EventController from '../controllers/EventController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { authorize } from '../middlewares/roleMiddleware.js';
import { eventValidator } from '../validators/eventValidator.js';
import { idValidator } from '../validators/idValidator.js';
import { validateRequest } from '../middlewares/validateRequest.js';

const router = Router();

// --- Rotas Públicas ---
router.get('/', EventController.getAll); // Listar todos
router.get('/:id', idValidator, validateRequest, EventController.getById); // Ver detalhes

// --- Rotas Protegidas (Admin) ---
// Agrupando middlewares de admin
const adminAuth = [protect, authorize('admin')];

router.post(
    '/',
    adminAuth,
    eventValidator,
    validateRequest,
    EventController.create
);

router.put(
    '/:id',
    adminAuth,
    idValidator,
    eventValidator,
    validateRequest,
    EventController.update
);

router.delete(
    '/:id',
    adminAuth,
    idValidator,
    validateRequest,
    EventController.delete
);

export default router;
