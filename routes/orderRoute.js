// routes/orderRoute.js
import express from 'express';
import orderController from '../controllers/orderController.js';

const router = express.Router();

//Create a new order
router.post('/orders', orderController.createOrder);

//Update a particular order with the help of its id
router.put('/orders/:id', orderController.updateOrder);

// GET request to list orders with optional filters
router.get('/orders', orderController.listOrders);

// GET request to get an order by ID
router.get('/orders/:id', orderController.getOrderById);

export default router;
