// routes/invoiceRoute.js
import express from 'express';
import invoiceController from '../controllers/invoiceController.js';

const router = express.Router();

// Create a new invoice
router.post('/invoices', invoiceController.createInvoice);

// Update a particular invoice with the help of its id
router.put('/invoices/:id', invoiceController.updateInvoice);

// GET request to list invoices with optional filters
router.get('/invoices', invoiceController.listInvoices);

// GET request to get an invoice by ID
router.get('/invoices/:id', invoiceController.getInvoiceById);

export default router;