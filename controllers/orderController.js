// controllers/orderController.js
import Order from '../models/orderModel.js';

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { status, deliveryAddress, amount } = req.body;
    const order = new Order({
      status,
      deliveryAddress,
      amount
    });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing order
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { status, deliveryAddress, amount } = req.body;

  try {
    const existingOrder = await Order.findById(id);

    if (!existingOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    existingOrder.status = status || existingOrder.status;
    existingOrder.deliveryAddress = deliveryAddress || existingOrder.deliveryAddress;
    existingOrder.amount = amount || existingOrder.amount;

    const updatedOrder = await existingOrder.save();

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};