import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/database.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import ticketRoutes from './routes.ticketRoutes.js';

// Configuração das variáveis de ambiente
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Conexão com o banco de dados Atlas
connectDB();

// Middlewares globais
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));

// Definição de rotas da API
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/eventos', eventRoutes);
app.use('/api/tickets', ticketRoutes);

// Rota base
app.get('/', (req, res) => {
    res.send('API Ticketeria funcionando! Acesse /api/eventos apra ver a lista.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
