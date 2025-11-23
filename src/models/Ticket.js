import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    evento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    codigoReserva: {
        type: String,
        unique: true,
        required: true
    },
    status: {
        type: String,
        enum: ['ativo', 'cancelado', 'utilizado'],
        default: 'ativo'
    },
    dataCompra: {
        type: Date,
        default: Date.now
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema);
export default Ticket;
