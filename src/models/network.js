import mongoose from "mongoose";
import User from "./users";
import generateHexNumber from "@/middlewares/hex-generator";

const networkSchema = new mongoose.Schema({
  networkId: generateHexNumber(64),
  networkName: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'Users',
    require: true
  },
  leaders: [{
    type: mongoose.Types.ObjectId,
    ref: 'Users',
    require: true
  }],
  connections: [{
    left: Network,
    right: Network,
  }],
});

const Network = mongoose.model('Network', networkSchema);

export default Network;
