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

    /**
   * List orders with optional filters for limit, offset.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
    async listOrders(req, res) {
      try {
        const params = req.query;
        const orders = await orderService.listOrders(params);
        res.json(orders);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    /**
     * Get an order by ID.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    async getOrderById(req, res) {
      try {
        const { id } = req.params;
        const order = await orderService.getOrderById(id);
        res.json(order);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
}

export default new OrderController();
