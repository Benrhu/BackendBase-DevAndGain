import express from "express";
import {
  getAllSales,
  getSales,
  createSales,
  updateSales,
  deleteSales
} from "../controllers/sales.controller";

const salesRouter = express.Router();

salesRouter.get("/", getAllSales);
salesRouter.get("/:id", getSales);
salesRouter.post("/", createSales);
salesRouter.put("/:id", updateSales);
salesRouter.delete("/:id", deleteSales);

export default salesRouter;