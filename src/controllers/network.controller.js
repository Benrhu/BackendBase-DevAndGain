import Network from "../models/network";

// Create a new product
export const createNetwork = (req, res) => {
  const network = new Network({
    networkName: req.body.networkName,
  });

  network
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
export const getAllNetworks = (req, res) => {
  Network.find()
    .then((networks) => {
      res.status(200).json({
        success: true,
        networks,
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
export const getNetwork = (req, res) => {
  Network.findById(req.params.id)
    .then((network) => {
      if (!network) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      res.status(200).json({
        success: true,
        network,
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
export const updateNetwork = async (req, res) => {
  try {
    const { networkId } = req.params;
    const updatedNetwork = await Network.findByIdAndUpdate(
      networkId,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedNetwork) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.send(updatedNetwork);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const deleteNetwork = async (req, res) => {
  try {
    const { networkId } = req.params;
    const deletedNetwork = await Network.findByIdAndDelete(networkId);
    if (!deletedNetwork) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.send(deletedNetwork);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};