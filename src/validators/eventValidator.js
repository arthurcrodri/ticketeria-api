import { body } from 'express-validator';

export const eventValidator = [
    body('titulo')
        .notEmpty().withMessage('O título é obrigatório'),

    body('descricao')
        .notEmpty().withMessage('A descrição é obrigatória'),

    body('dataEvento')
        .isISO8601().withMessage('Data inválida. Use o formato YYYY-MM-DD')
        .toDate()
        .custom((value) => {
            if (value < new Date()) {
                throw new Error('A data do evento deve ser no futuro');
            }
            return true;
        }),

    body('local')
        .notEmpty().withMessage('O local é obrigatório'),

    body('preco')
        .isFloat({ min: 0 }).withMessage('O preço deve ser positivo ou zero'),

    body('capacidadeTotal')
        .isInt({ min: 1 }).withMessage('A capacidade deve ser de pelo menos 1 pessoa')
];
