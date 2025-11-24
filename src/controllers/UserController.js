import UserService from '../services/UserService.js';

class UserController {
    async getAll(req, res, next) {
        try {
            const users = await UserService.findAll();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    async getProfile(req, res, next) {
        try {
            const user = await UserService.findById(req.user.id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const user = await UserService.update(req.user.id, req.body);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const idToDelete = req.params.id || req.user.id;
            const result = await UserService.delete(idToDelete);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();
