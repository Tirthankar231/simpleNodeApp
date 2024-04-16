// routes/userRoutes.js
import express from 'express';
import { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } from '../controllers/userController.js';

const router = express.Router();

// Create a new user
router.post('/user', createUser);

// Get all users
router.get('/user', getAllUsers);

// Get a single user by ID
router.get('/user/:id', getUserById);

// Update a user by ID
router.put('/user/:id', updateUserById);

// Delete a user by ID
router.delete('/user/:id', deleteUserById);

export default router;
