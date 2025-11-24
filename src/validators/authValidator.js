import { body } from 'express-validator';

export const registerValidator = [
    body('nome')
        .notEmpty().withMessage('O nome é obrigatório')
        .isLength({ min: 3 }).withMessage('O nome deve ter no mínimo 3 caracteres'),

    body('email')
        .isEmail().withMessage('Forneça um e-mail válido'),

    body('senha')
        .isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres')
];

export const loginValidator = [
    body('email')
        .isEmail().withMessage('Forneça um e-mail válido'),

    body('senha')
        .notEmpty().withMessage('A senha é obrigatória')
];
