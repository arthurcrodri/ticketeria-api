import UserService from '../services/UserService.js';

class UserController {
    async getAll(req, res) {
        try {
            const users = await UserService.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    }

    async getProfile(req, res) {
        try {
            const user = await UserService.findById(req.user.id);
            res.json(user);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }

    async update(req, res) {
        try {
            const user = await UserService.update(req.user.id, req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }

    async delete(req, res) {
        try {
            const idToDelete = req.params.id || req.user.id;
            const result = await UserService.delete(idToDelete);
            res.json(result);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
}

export default new UserController();
