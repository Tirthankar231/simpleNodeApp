// authRoutes.js

import express from 'express';
import AuthController from '../controllers/authController.js';

const router = express.Router();

// Route to generate JWT token
router.post('/token', AuthController.generateToken);

export default router;
