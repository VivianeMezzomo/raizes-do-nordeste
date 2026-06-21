function authorize(...allowedRoles) {
  return (req, res, next) => {
    const { role } = req.user;

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({
        error: "ACESSO_NEGADO",
        message: "Você não possui permissão para acessar este recurso.",
      });
    }

    next();
  };
}

export default authorize;
