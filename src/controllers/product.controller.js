import Product from '../models/product';

// Create a new product
export const createProduct = (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  product.save()
    .then(result => {
      res.status(201).json({
        success: true,
        message: 'Product successfully created',
        result,
      });
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};

// Get all products
export const getAllProducts = (req, res) => {
  Product.find()
    .then(products => {
      res.status(200).json({
        success: true,
        products,
      });
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};

// Get a single product
export const getProduct = (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }

      res.status(200).json({
        success: true,
        product,
      });
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};

// Update a product
export const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedProduct) {
        return res.status(404).send({ error: 'Product not found' });
      }
      res.send(updatedProduct);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
  
  export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res.status(404).send({ error: 'Product not found' });
      }
      res.send(deletedProduct);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
  