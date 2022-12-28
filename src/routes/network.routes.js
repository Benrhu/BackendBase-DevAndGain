import express from "express";
import {
  getAllNetworks,
  getNetwork,
  updateNetwork,
  deleteNetwork,
  createNetwork
} from "../controllers/network.controller";

const networkRouter = express.Router();

networkRouter.get("/", getAllNetworks);
networkRouter.get("/:id", getNetwork);
networkRouter.post("/", createNetwork);
networkRouter.put("/:id", updateNetwork);
networkRouter.delete("/:id", deleteNetwork);

export default networkRouter;
