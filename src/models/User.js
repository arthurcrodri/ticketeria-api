import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        enum: ['admin', 'client'],
        default: 'client',
    },
    criadoEm: {
        type: Date,
        default: Date.now
    },
});

// Hook de Hash da senha antes de salvar
userSchema.pre('save', async function(next) {
    if (!this.isModified('senha')) return next();

    const salt = await bcrypt.genSalt(10);
    this.senha = await bcrypt.hash(this.senha, salt);
    next();
});

// Método auxiliar de comparação de senhas
userSchema.methods.compararSenha = async function(senhaCandidata) {
    return await bcrypt.compare(senhaCandidata, this.senha);
};

const User = mongoose.model('User', userSchema);
export default User;
