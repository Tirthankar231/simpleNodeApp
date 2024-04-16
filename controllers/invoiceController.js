// controllers/invoiceController.js
import invoiceService from '../service/invoiceService.js';

class InvoiceController {
  /**
   * Create a new invoice.
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   * @returns {Object} - The created invoice.
   */
  async createInvoice(req, res) {
    try {
      const invoiceData = req.body;
      const createdInvoice = await invoiceService.createInvoice(invoiceData);
      res.status(201).json(createdInvoice);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  /**
   * Update an existing invoice.
   * @param {Object} req - The HTTP request object containing the invoice ID.
   * @param {Object} res - The HTTP response object.
   * @returns {Object} - The updated invoice.
   */
  async updateInvoice(req, res) {
    const { id } = req.params;
    try {
      const invoiceData = req.body;
      const updatedInvoice = await invoiceService.updateInvoice(id, invoiceData);
      res.status(200).json(updatedInvoice);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

    /**
   * List invoices with optional filters for limit, offset, and billingAddress.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
    async listInvoices(req, res) {
      try {
        const params = req.query;
        const invoices = await invoiceService.listInvoices(params);
        res.json(invoices);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    /**
     * Get an invoice by ID.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    async getInvoiceById(req, res) {
      try {
        const { id } = req.params;
        const invoice = await invoiceService.getInvoiceById(id);
        res.json(invoice);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
}

export default new InvoiceController();
