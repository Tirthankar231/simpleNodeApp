// models/returnModel.js
import mongoose from 'mongoose';

const returnSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order', // Reference to the Order model
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  returnImages: [{
    type: String // Array of image URLs
  }],
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'], // Status options
    default: 'pending'
  }
});

const Return = mongoose.model('Return', returnSchema);

export default Return;
