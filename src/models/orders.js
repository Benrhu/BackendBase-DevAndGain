import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId: generateHexNumber(64),
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'Users',
      require: true
    },
    products: [{
      type: mongoose.Types.ObjectId,
      ref: 'Products',
      require: true
    }],
    amount: {
      type: Number,
      default: 0
    },
    totalPrice: Number
  });
const Order = mongoose.model("Orders", orderSchema);

export default Order;
