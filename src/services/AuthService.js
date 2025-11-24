import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository.js';
import UserDTO from '../dtos/UserDTO.js';

class AuthService {
    generateToken(id, role) {
        return jwt.sign({ id, role }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });
    }

    async register(userData) {
        const userExists = await UserRepository.findByEmail(userData.email);
        if (userExists) {
            throw new Error('E-mail já cadastrado');
        }

        const newUser = await UserRepository.create(userData);

        const token = this.generateToken(newUser._id, newUser.role);

        return {
            user: UserDTO.userResponse(newUser),
            token
        };
    }

    async login(email, senha) {
        const user = await UserRepository.findByEmail(email);

        if (!user || !(await user.compararSenha(senha))) {
            throw new Error('Credenciais inválidas');
        }

        const token = this.generateToken(user._id, user.role);

        return {
            user: UserDTO.userResponse(user),
            token
        };
    }
}

export default new AuthService();
