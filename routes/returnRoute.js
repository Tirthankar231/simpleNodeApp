// routes/returnRoute.js
import express from 'express';
import returnController from '../controllers/returnController.js';

const router = express.Router();

// Create a new return
router.post('/returns', returnController.createReturn);

// Update a particular return with the help of its id
router.put('/returns/:id', returnController.updateReturn);

// GET request to list returns with optional filters
router.get('/returns', returnController.listReturns);

// GET request to get a return by ID
router.get('/returns/:id', returnController.getReturnById);

export default router;
