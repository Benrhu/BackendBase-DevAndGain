import Order from "../models/orders";

// Create a new product
export const createOrder = (req, res) => {
  const order = new Order({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  order
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
export const getAllOrders = (req, res) => {
  Order.find()
    .then((orders) => {
      res.status(200).json({
        success: true,
        orders,
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
export const getOrder = (req, res) => {
  Order.findById(req.params.id)
    .then((order) => {
      if (!order) {
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
export const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedOrder) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.send(updatedOrder);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.send(deletedOrder);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
