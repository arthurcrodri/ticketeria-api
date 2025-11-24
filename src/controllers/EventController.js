import EventService from '../services/EventService.js';

class EventController {
    async create(req, res) {
        try {
            const event = await EventService.create(req.body, req.user.id);
            res.status(201).json(event);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const events = await EventService.findAll();
            res.json(events);
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    }

    async getById(req, res) {
        try {
            const event = await EventService.findById(req.params.id);
            res.json(event);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }

    async update(req, res) {
        try {
            const event = await EventService.update(req.params.id, req.body);
            res.json(event);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await EventService.delete(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
}

export default new EventController();
