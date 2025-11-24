import { validationResult } from 'express-validator';

export const validateRequest = (req, res, next) => {
    const error = validationResult(req);

    if (!erros.isEmpty()) {
        return res.status(400).json({
            sucesso: false,
            errors: errors.array().map(err => ({
                campo: err.path,
                mensagem: err.msg
            }))
        });
    }

    next();
};
