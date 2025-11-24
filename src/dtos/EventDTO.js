export default class EventDTO {
    static createInput(data) {
        return {
            titulo: data.titulo,
            descricao: data.descricao,
            dataEvento: data.dataEvento,
            local: data.local,
            preco: data.preco,
            capacidadeTotal: data.capacidadeTotal,
            ingressosDisponiveis: data.capacidadeTotal    // todo evento recém-criado inicia com o número total de ingressos disponíveis
        };
    }

    static updateInput(data) {
        return {
            titulo: data.titulo,
            descricao: data.descricao,
            dataEvento: data.dataEvento,
            local: data.local,
            preco: data.preco,
            capacidadeTotal: data.capacidadeTotal
        };
    }

    static eventResponse(event) {
        return {
            id: event._id,
            titulo: event.titulo,
            descricao: event.descricao,
            data: event.dataEvento,
            local: event.local,
            preco: event.preco,
            lugaresDisponiveis: event.ingressosDisponiveis,
            organizador: event.criadoPor && event.criadoPor.nome ? event.criadoPor.nome : 'Administrador'
        };
    }
}
