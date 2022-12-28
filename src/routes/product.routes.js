import express from "express";
import {
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct
} from "../controllers/product.controller";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default usersRouter;
