class EAPI {
    static invalidRouteException() {
        return { msg: 'Você está tentando acessar uma rota inválida!' };
    }

    static errorFromSystemException() {
        return { msg: 'Algo de errado aconteceu, tente novamente ou entre em contato com o fornecedor da aplicação' };
    }
}

export {
    EAPI
}