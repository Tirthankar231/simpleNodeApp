// controllers/returnController.js
import returnService from '../service/returnService.js';

class ReturnController {
  /**
   * Create a new return.
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   * @returns {Object} - The created return.
   */
  async createReturn(req, res) {
    try {
      const returnData = req.body;
      const createdReturn = await returnService.createReturn(returnData);
      res.status(201).json(createdReturn);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  /**
   * Update an existing return.
   * @param {Object} req - The HTTP request object containing the return ID.
   * @param {Object} res - The HTTP response object.
   * @returns {Object} - The updated return.
   */
  async updateReturn(req, res) {
    const { id } = req.params;
    try {
      const returnData = req.body;
      const updatedReturn = await returnService.updateReturn(id, returnData);
      res.status(200).json(updatedReturn);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  /**
 * List returns with optional filters for limit, offset, and itemId.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
  async listReturns(req, res) {
    try {
      const params = req.query;
      const returns = await returnService.listReturns(params);
      res.json(returns);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  /**
   * Get a return by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  async getReturnById(req, res) {
    try {
      const { id } = req.params;
      const returnedItem = await returnService.getReturnById(id);
      res.json(returnedItem);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

export default new ReturnController();