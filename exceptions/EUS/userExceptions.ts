class EUS {
    static emptyFieldException() {
        return { msg: 'É necessário que sejam enviados os campos de nome e idade sejam enviados!' };
    }
    static gettingIdException() {
        return { msg: 'É necessário enviar um id válido no parâmetro da rota!' };
    }
    static invalidUserException() {
        return { msg: 'Não é possível gerenciar usuários que não estejam cadastrados!' };
    }
}

export {
    EUS
}