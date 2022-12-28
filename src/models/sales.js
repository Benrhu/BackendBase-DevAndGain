import mongoose, { mongo } from "mongoose";

/* import generateHexNumber from "../../middlewares/hex-generator"; */

const salesSchema = new mongoose.Schema({
  salesId: generateHexNumber(64),
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    require: true,
  },
  products: [{
    type: mongoose.Types.ObjectId,
    ref: "Products",
    require: true,
  }],
  amount: {
    type: Number,
    default: 0,
  },
  totalPrice: Number,
});

const Sales = mongoose.model('Sales', salesSchema);

export default Sales;
