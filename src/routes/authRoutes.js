import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';
import { registerValidator, loginValidator } from '../validators/authValidator.js';
import { validateRequest } from '../middlewares/validateRequest.js';

const router = Router();

// Rota: POST /api/auth/registro
router.post(
    '/registro',
    registerValidator,
    validateRequest,
    AuthController.register
);

// Rota: POST /api/auth/login
router.post(
    '/login',
    loginValidator,
    validateRequest,
    AuthController.login
);

export default router;
