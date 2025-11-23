import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carregando variáveis de ambiente (caso não tenham sido carregadas)
dotenv.config();

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Atlas conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar no MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
