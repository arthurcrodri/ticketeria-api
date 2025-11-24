import EventService from '../services/EventService.js';

class EventController {
    async create(req, res, next) {
        try {
            const event = await EventService.create(req.body, req.user.id);
            res.status(201).json(event);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const events = await EventService.findAll();
            res.json(events);
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            const event = await EventService.findById(req.params.id);
            res.json(event);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const event = await EventService.update(req.params.id, req.body);
            res.json(event);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const result = await EventService.delete(req.params.id);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default new EventController();
