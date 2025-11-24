import AuthService from '../services/AuthService.js';

class AuthController {
    async register(req, res) {
        try {
            const result = await AuthService.register(req.body);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }

    async login(req, res) {
        try {
            const result = await AuthService.login(req.body.email, req.body.senha);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default new AuthController();
