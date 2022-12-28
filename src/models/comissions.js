import mongoose from "mongoose";
import generateHexNumber from "@/middlewares/hex-generator";

const comissionsSchema = new mongoose.Schema({
  comissionId: generateHexNumber(64),
  userId: userEntity,
  description: String,
  productPercentage: 50, // 50% del precio
  servicePercentage: Number, // 10% del precio
  earnedAt: {
    type: Date,
    default: typeof Date.now,
  },
});

const Comission = mongoose.model("Comissions", comissionsSchema);

export default Comission;
