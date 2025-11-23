import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descricao: {
        type: String,
        required: true
    },
    dataEvento: {
        type: Date,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true,
        min: 0
    },
    capacidadeTotal: {
        type: Number,
        required: true,
        min: 1
    },
    ingressosDisponiveis: {
        type: Number,
        required: true
    },
    criadoPor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
