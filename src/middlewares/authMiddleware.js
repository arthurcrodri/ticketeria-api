import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = decoded;

            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ mensagem: 'Token inválido, autorização falhou' });
        }
    }

    if (!token) {
        res.status(401).json({ mensagem: 'Token não fornecido, autorização negada' });
    }
};
