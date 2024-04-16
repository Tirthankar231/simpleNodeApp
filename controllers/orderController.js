// controllers/orderController.js

import orderService from '../service/orderService.js';

/**
 * Controller class to handle order-related HTTP requests.
 */
class OrderController {
  /**
   * Create a new order.
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   * @returns {Object} - The created order.
   */
  async createOrder(req, res) {
    try {
      const order = await orderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  /**
   * Update an existing order.
   * @param {Object} req - The HTTP request object containing the order ID.
   * @param {Object} res - The HTTP response object.
   * @returns {Object} - The updated order.
   */
  async updateOrder(req, res) {
    const { id } = req.params;
    try {
      const updatedOrder = await orderService.updateOrder(id, req.body);
      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new OrderController();
