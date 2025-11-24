import AuthService from '../services/AuthService.js';

class AuthController {
    async register(req, res) {
        try {
            const result = await AuthService.register(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }

    async login(req, res) {
        try {
            const result = await AuthService.login(req.body.email, req.body.senha);
            res.status(200).json(result);
        } catch (error) {
            res.status(401).json({ erro: error.message });
        }
    }
}

export default new AuthController();
