export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ mensagem: `Acesso proibido. O papel "${req.user?.role}" não tem permissão para esta ação.` });
        }
        next();
    };
};
