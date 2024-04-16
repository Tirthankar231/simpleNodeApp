// models/user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;