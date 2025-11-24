// src/controllers/ViewController.js
import EventService from '../services/EventService.js';

class ViewController {
    async renderHome(req, res, next) {
        try {
            const eventos = await EventService.findAll();

            res.render('index', { eventos });
        } catch (error) {
            next(error);
        }
    }

    renderLogin(req, res) {
        res.render('login');
    }

    renderRegister(req, res) {
        res.render('register');
    }

    async renderAdmin(req, res, next) {
        try {
            const eventos = await EventService.findAll();
            res.render('admin', { eventos });
        } catch (error) {
            next(error);
        }
    }
}

export default new ViewController();
