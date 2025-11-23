import User from '../models/User.js';

class UserRepository {
    // Criar novo usuário
    async create(userData) {
        const user = new User(userData);
        return await user.save();
    }

    // Buscar usuário por e-mail
    async findByEmail(email) {
        return await User.findOne({ email }).select('+senha');
    }

    // Buscar por ID
    async findById(id) {
        return await User.findById(id);
    }

    // Listar todos os usuários (admin)
    async findAll() {
        return await User.find().select('-senha');
    }

    // Atualizar perfil
    async update(id, userData) {
        return await User.findByIdAndUpdate(id, userData, { new: true });
    }

    // Deletar conta
    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

export default new UserRepository();
