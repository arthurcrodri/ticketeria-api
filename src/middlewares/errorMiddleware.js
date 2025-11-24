const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode);

    res.json({
        sucesso: false,
        mensagem: err.message || 'Erro interno do servidor',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};

export default errorHandler;
