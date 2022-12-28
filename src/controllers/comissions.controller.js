import Comission from '../models/comissions';

// Create a new product
export const createComission = (req, res) => {
  const comission = new Comission({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  comission.save()
    .then(result => {
      res.status(201).json({
        success: true,
        message: 'comission successfully created',
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

// Get all comissions
export const getAllComissions = (req, res) => {
  Comission.find()
    .then(comissions => {
      res.status(200).json({
        success: true,
        comissions,
      });
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};

// Get a single comission
export const getComission = (req, res) => {
  Comission.findById(req.params.id)
    .then(comission => {
      if (!comission) {
        return res.status(404).json({
          success: false,
          message: 'comission not found',
        });
      }

      res.status(200).json({
        success: true,
        comission,
      });
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};

// Update a comission
export const updateComission = async (req, res) => {
    try {
      const { comissionId } = req.params;
      const updateComission = await Comission.findByIdAndUpdate(comissionId, req.body, {
        new: true,
      });
      if (!updateComission) {
        return res.status(404).send({ error: 'Comissions not found' });
      }
      res.send(updateComission);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
  
  export const deleteComissions = async (req, res) => {
    try {
      const { comissionId } = req.params;
      const deletedComissions = await Comission.findByIdAndDelete(id);
      if (!deletedComissions) {
        return res.status(404).send({ error: 'Comissions not found' });
      }
      res.send(deletedComissions);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
  