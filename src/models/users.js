import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  orders: [{
    type: mongoose.Types.ObjectId,
    ref: 'Orders'
  }],
  sales: [{
    type: mongoose.Types.ObjectId,
    ref: 'Sales'
  }],
  refCode: {
    type: String,
    require: true
  }
});

const User = mongoose.model('Users', userSchema);

export default User;