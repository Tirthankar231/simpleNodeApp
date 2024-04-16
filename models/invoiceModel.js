// models/invoiceModel.js
import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  billingAddress: {
    type: String,
    required: true
  },
  invoiceLink: {
    type: String,
    required: true
  },
  finderFees: {
    type: Number,
    default: 0 // Default value for finder fees
  },
  amount: {
    type: Number,
    required: true
  }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;
