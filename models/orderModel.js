// models/order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'pending'
  },
  deliveryAddress: String,
  amount: Number
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;