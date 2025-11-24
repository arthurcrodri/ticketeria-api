import UserRepository from '../repositories/UserRepository.js';
import UserDTO from '../dtos/UserDTO.js';

class UserService {
    async findAll() {
        const users = await UserRepository.findAll();
        return users.map(user => UserDTO.userResponse(user));
    }

    async findById(id) {
        const user = await UserRepository.findById(id);
        if (!user) throw new Error('Usuário não encontrado');
        return UserDTO.userResponse(user);
    }

    async update(id, userData) {
        const updatedUser = await UserRepository.update(id, userData);
        if (!updatedUser) throw new Error('Usuário não encontrado');
        return UserDTO.userResponse(updatedUser);
    }

    async delete(id) {
        const deleted = await UserRepository.delete(id);
        if (!deleted) throw new Error('Usuário não encontrado');
        return { mensagem: 'Usuário deletado com sucesso' };
    }
}

export default new UserService();
