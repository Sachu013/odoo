const jwt = require("jsonwebtoken");

const JWT_SECRET = "your_jwt_secret_key"; // Use the same secret as in your auth routes

function authMiddleware(req, res, next) {
  // Get token from the Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded user info to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
}

module.exports = authMiddleware;
