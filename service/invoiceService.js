// services/invoiceService.js
import Invoice from '../models/invoiceModel.js';

class InvoiceService {
  /**
   * Create a new invoice.
   * @param {Object} data - Data containing billingAddress, invoiceLink, finderFees, and amount.
   * @returns {Promise<Object>} - The created invoice.
   * @throws {Error} - If there's an error during invoice creation.
   */
  async createInvoice(data) {
    try {
      const { billingAddress, invoiceLink, finderFees, amount } = data;
      const newInvoice = new Invoice({
        billingAddress,
        invoiceLink,
        finderFees,
        amount
      });
      const savedInvoice = await newInvoice.save();
      return savedInvoice;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Update an existing invoice.
   * @param {string} id - The ID of the invoice to be updated.
   * @param {Object} data - Data containing fields to be updated (billingAddress, invoiceLink, finderFees, amount).
   * @returns {Promise<Object>} - The updated invoice.
   * @throws {Error} - If the invoice is not found or there's an error during update.
   */
  async updateInvoice(id, data) {
    try {
      const { billingAddress, invoiceLink, finderFees, amount } = data;
      const updatedInvoice = await Invoice.findOneAndUpdate(
        { _id: id },
        { $set: { billingAddress, invoiceLink, finderFees, amount } },
        { new: true }
      );

      if (!updatedInvoice) {
        throw new Error('Invoice not found');
      }

      return updatedInvoice;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
 * List invoices with optional filters for limit and offset.
 * @param {Object} params - Parameters for filtering invoices (limit, offset).
 * @returns {Promise<Object>} - Object containing count and array of invoices.
 * @throws {Error} - If there's an error during fetching invoices.
 */
  async listInvoices(params) {
    try {
      let query = {};

      const invoices = await Invoice.find(query).sort({ createdAt: 1 })
        .skip(params.offset)
        .limit(params.limit);

      const count = await Invoice.countDocuments(query);
      return { count, data: invoices };
    } catch (error) {
      console.log('[InvoiceService] [listInvoices] Error', error);
      throw new Error(error.message);
    }
  }
  /**
   * Get an invoice by ID.
   * @param {string} id - The ID of the invoice to fetch.
   * @returns {Promise<Object>} - The invoice object.
   * @throws {Error} - If the invoice is not found or there's an error during fetching.
   */
  async getInvoiceById(id) {
    try {
      const invoice = await Invoice.findOne({ _id: id });
      if (!invoice) {
        throw new Error('Invoice not found');
      }
      return invoice;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new InvoiceService();