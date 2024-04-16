// services/orderService.js

import Order from '../models/orderModel.js';

/**
 * Service class to handle order-related operations.
 */
class OrderService {
  /**
   * Create a new order.
   * @param {Object} data - Data containing status, deliveryAddress, and amount.
   * @returns {Promise<Object>} - The created order.
   * @throws {Error} - If there's an error during order creation.
   */
  async createOrder(data) {
    try {
      const { status, deliveryAddress, amount } = data;
      const order = new Order({
        status,
        deliveryAddress,
        amount
      });
      const savedOrder = await order.save();
      return savedOrder;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Update an existing order.
   * @param {string} id - The ID of the order to be updated.
   * @param {Object} data - Data containing fields to be updated (status, deliveryAddress, amount).
   * @returns {Promise<Object>} - The updated order.
   * @throws {Error} - If the order is not found or there's an error during update.
   */
  async updateOrder(id, data) {
    try {
      const { status, deliveryAddress, amount } = data;
      const updatedOrder = await Order.findOneAndUpdate(
        { _id: id },
        { $set: { status, deliveryAddress, amount } },
        { new: true }
      );

      if (!updatedOrder) {
        throw new Error('Order not found');
      }

      return updatedOrder;
    } catch (error) {
      throw new Error(error.message);
    }
  }


  /**
   * List orders with optional filters for limit and offset.
   * @param {Object} params - Parameters for filtering orders (limit, offset).
   * @param {number} [params.limit] - Maximum number of orders to return.
   * @param {number} [params.offset] - Number of orders to skip.
   * @returns {Promise<Object>} - Object containing count and array of orders.
   * @throws {Error} - If there's an error during fetching orders.
   */
  async listOrders(params) {
    try {
      let query = {};
      const orders = await Order.find(query).sort({ createdAt: 1 })
        .skip(params.offset)
        .limit(params.limit);

      const count = await Order.countDocuments(query);
      return { count, data: orders };
    } catch (error) {
      console.log('[OrderService] [listOrders] Error', error);
      throw new Error(error.message);
    }
  }

  /**
   * Get an order by ID.
   * @param {string} id - The ID of the order to fetch.
   * @returns {Promise<Object>} - The order object.
   * @throws {Error} - If the order is not found or there's an error during fetching.
   */
  async getOrderById(id) {
    try {
      const order = await Order.findOne({ _id: id });
      if (!order) {
        throw new Error('Order not found');
      }
      return order;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new OrderService();