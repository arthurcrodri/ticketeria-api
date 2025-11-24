import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { authorize } from '../middlewares/roleMiddleware.js';
import { idValidator } from '../validators/idValidator.js';
import { validateRequest } from '../middlewares/validateRequest.js';

const router = Router();

// Todas as rotas abaixo exigem estar logado
router.use(protect);

// Rota: GET /api/users/perfil (Qualquer usuário logado vê seus dados)
router.get('/perfil', UserController.getProfile);

// Rota: PUT /api/users/perfil (Atualizar próprios dados)
router.put('/perfil', UserController.update);

// --- Área Administrativa (RBAC) ---

// Rota: GET /api/users (Só Admin vê todos)
router.get(
    '/',
    authorize('admin'),
    UserController.getAll
);

// Rota: DELETE /api/users/:id (Admin bane usuário)
router.delete(
    '/:id',
    authorize('admin'),
    idValidator,
    validateRequest,
    UserController.delete
);

export default router;
