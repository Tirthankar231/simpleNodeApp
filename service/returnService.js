// services/returnService.js
import Return from '../models/returnModel.js';

class ReturnService {
  /**
   * Create a new return.
   * @param {Object} data - Data containing itemId, reason, returnImages, and status.
   * @returns {Promise<Object>} - The created return.
   * @throws {Error} - If there's an error during return creation.
   */
  async createReturn(data) {
    try {
      const { itemId, reason, returnImages, status } = data;
      const newReturn = new Return({
        itemId,
        reason,
        returnImages,
        status
      });
      const savedReturn = await newReturn.save();
      return savedReturn;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Update an existing return.
   * @param {string} id - The ID of the return to be updated.
   * @param {Object} data - Data containing fields to be updated (reason, returnImages, status).
   * @returns {Promise<Object>} - The updated return.
   * @throws {Error} - If the return is not found or there's an error during update.
   */
  async updateReturn(id, data) {
    try {
      const { reason, returnImages, status } = data;
      const updatedReturn = await Return.findOneAndUpdate(
        { _id: id },
        { $set: { reason, returnImages, status } },
        { new: true }
      );

      if (!updatedReturn) {
        throw new Error('Return not found');
      }

      return updatedReturn;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  /**
 * List returns with optional filters for limit and offset.
 * @param {Object} params - Parameters for filtering returns (limit, offset, itemId).
 * @returns {Promise<Object>} - Object containing count and array of returns.
 * @throws {Error} - If there's an error during fetching returns.
 */
  async listReturns(params) {
    try {
      let query = {};

      if (params.itemId) {
        query.itemId = params.itemId;
      }

      const returns = await Return.find(query).sort({ createdAt: 1 })
        .skip(params.offset)
        .limit(params.limit);

      const count = await Return.countDocuments(query);
      return { count, data: returns };
    } catch (error) {
      console.log('[ReturnService] [listReturns] Error', error);
      throw new Error(error.message);
    }
  }

  /**
   * Get a return by ID.
   * @param {string} id - The ID of the return to fetch.
   * @returns {Promise<Object>} - The return object.
   * @throws {Error} - If the return is not found or there's an error during fetching.
   */
  async getReturnById(id) {
    try {
      const returnedItem = await Return.findOne({ _id: id });
      if (!returnedItem) {
        throw new Error('Return not found');
      }
      return returnedItem;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new ReturnService();