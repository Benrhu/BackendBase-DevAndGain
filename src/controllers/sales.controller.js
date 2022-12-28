import Sales from "../models/sales";

// Create a new product
export const createSales = (req, res) => {
  const sales = new Sales({
    products: req.body.products,
    amount: req.body.amount,
    totalPrice: req.body.totalPrice,
  });
  
  sales
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Product successfully created",
        result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};

// Get all products
export const getAllSales = (req, res) => {
  Sales.find()
    .then((sales) => {
      res.status(200).json({
        success: true,
        sales,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};

// Get a single product
export const getSales = (req, res) => {
  Sales.findById(req.params.id)
    .then((sales) => {
      if (!sales) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
      res.status(200).json({
        success: true,
        order,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};

// Update a product
export const updateSales = async (req, res) => {
  try {
    const { salesId } = req.params;
    const updatedSales = await Sales.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSales) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.send(updatedSales);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const deleteSales = async (req, res) => {
  try {
    const { salesId } = req.params;
    const deletedSales = await Sales.findByIdAndDelete(id);
    if (!deletedSales) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.send(deletedSales);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
