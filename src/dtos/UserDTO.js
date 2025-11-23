export default class UserDTO {
    static registerInput(data) {
        return {
            nome: data.nome,
            email: data.email,
            senha: data.senha
        };
    }

    static loginInput(data) {
        return {
            email: data.email,
            senha: data.senha
        };
    }

    static updateInput(data) {
        return {
            nome: data.nome,
            senha: data.senha
        };
    }

    static userResponse(user) {
        return {
            id: user._id,
            nome: user.nome,
            email: user.email,
            role: user.role,
            criadoEm: user.criadoEm
        };
    }
}
