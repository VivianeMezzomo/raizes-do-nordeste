import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "TOKEN_NAO_INFORMADO",
    });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;

    next();
  } catch (error) {
    return res.status(401).json({
      error: "TOKEN_INVALIDO",
    });
  }
}

export default authMiddleware;
