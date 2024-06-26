// app.js
import express from 'express';
import mongoose from 'mongoose';
import orderRoutes from '../simpleNodeApp/routes/orderRoute.js';
import returnRoutes from '../simpleNodeApp/routes/returnRoute.js';
import invoiceRoutes from '../simpleNodeApp/routes/invoiceRoute.js';
import authRoutes from '../simpleNodeApp/routes/authRoute.js';
import dotenv from 'dotenv';

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Routes
app.use('/api', orderRoutes)
app.use('/api', returnRoutes)
app.use('/api', invoiceRoutes)
app.use('/api', authRoutes)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
