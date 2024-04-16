// routes/orderRoute.js
import express from 'express';
import orderController from '../controllers/orderController.js';

const router = express.Router();

//Create a new order
router.post('/orders', orderController.createOrder);

//Update a particular order with the help of its id
router.put('/orders/:id', orderController.updateOrder);

export default router;
