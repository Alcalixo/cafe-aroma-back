const {  createOrderController, getAllOrderController,getOrderByIdController,updateOrderController, deleteOrderController} = require("../controllers/productController");

const getAllOrdersHandler = async (req, res) => {
    try {
      const response = await getAllOrderController();
      res.status(200).json(response);  // res.json() para enviar los productos
    } catch (error) {
      console.error("Error al obtener las ordenes:", error);
      res.status(500).send({ error: error.message });
    }
  };

const getOneOrderHandler = async(req, res)=>{
    try {
        const {id} = req.params;
        const response = await getOrderByIdController(id);
        res.send(response);
    } catch (error) {
        res.status(400).send({Error : error.message});
    }
    
};

const createOrderHandler = async (req, res)=>{
    try {
        const newOrder = new Order({
            user_id: req.body.user_id,
            items: req.body.items,
            })
        // const {name, precio, stock, img, description} = req.body;
        const response = await createOrderController(newOrder);
        res.send(response);
    } catch (error) {
        res.status(400).send({Error : error.message});
    }
};

const updateOrderHandler =async (req, res) => {
    try {
        const {id} = req.params;
        const {name, precio, stock, img, description } = req.body;
        const response = await updateOrderController(id, name, precio, stock, img, description );
        res.send(response);
    } catch (error) {
        res.status(400).send({Error : error.message});
    }
   
};

const deleteOrderHandler = async (req, res)=>{
   try {
        const {id} = req.params;
        const response = await deleteOrderController(id);
        res.status(200).json(response); 
   } catch (error) {
        res.status(400).send({Error : error.message});
   }
};

 
module.exports = {
    getAllOrdersHandler,
    getOneOrderHandler ,
    createOrderHandler,
    updateOrderHandler,
    deleteOrderHandler
};










