// routes/orderRoute.js
import express from 'express';
import { createOrder, updateOrder } from '../controllers/orderController.js';

const router = express.Router();

//Create a new order
router.post('/orders', createOrder);

//Update a particular order with the help of its id
router.put('/orders/:id', updateOrder);

export default router;
