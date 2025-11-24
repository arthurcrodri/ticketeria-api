import { param } from 'express-valdator';
import mongoose from 'mongoose';

export const idValidator = [
    param('id')
        .custom((value) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                throw new Error('ID inválido');
            }
            return true;
        })
];
