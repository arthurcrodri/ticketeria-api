export default class TicketDTO {
    static createInput(data) {
        return {
            eventoId: data.eventoId
        };
    }

    static ticketResponse(ticket) {
        return {
            id: ticket._id,
            codigo: ticket.codigoReserva,
            status: ticket.status,
            dataCompra: ticket.dataCompra,
            evento: ticket.evento ? {
                titulo: ticket.evento.titulo,
                data: ticket.evento.dataEvento,
                local: ticket.evento.local,
                preco: ticket.evento.preco
            } : { info: 'Evento não encontrado' },
            comprador: ticket.usuario && ticket.usuario.nome ? ticket.usuario.nome : undefined
        };
    }
}
