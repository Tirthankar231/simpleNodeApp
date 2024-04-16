// middleware/authMiddleware.js

import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  const secretKey = process.env.JWT_SECRET;

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    if (decoded.user !== process.env.API_USER || decoded.password !== process.env.API_PASSWORD) {
      throw new Error('Invalid token');
    }
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

export default authenticateToken;
