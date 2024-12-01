const {  createProductController, getAllProductController,getOneProductController,getProductByIdController,updateProductController, deleteProductController} = require("../controller/productosControllers");

const joi = require("joi");
const productSchema = joi.object({
    name: joi.string().required(),
    precio:joi.number().required(),
    stock:joi.number().required()
})

const idSchema = joi.object({id :joi.number().required()})

const getAllProductsHandler = (req,res) =>{
    try {
    const{name} = req.query;
    if (name){
        const response = getOneProductController(name);
        res.status(200).send(response);
    }else{
        const response2 = getAllProductController();
        res.send(response2);
    }
   } catch (error) {
         res.status(500).send({ error: error.message });
   }
    
}; 

const getOneproductHandler = (req, res)=>{
    try {
        const {id} = req.params;
        const response = getProductByIdController(id);
        res.send(response);
    } catch (error) {
        res.status(400).send({Error : error.message});
    }
    
};

const createProductHandler = async (req, res)=>{
    try {
        const {name, precio, stock } = req.body;
        const response = await createProductController(name, precio, stock );
        res.send(response);
    } catch (error) {
        res.status(400).send({Error : error.message});
    }
};

const updateProductHandler = (req, res) => {
    try {
        const {id} = req.params;
        const {name, precio, stock } = req.body;
        const response = updateProductController(id, name, precio, stock );
        res.send(response);
    } catch (error) {
        res.status(400).send({Error : error.message});
    }
   
};

const deletProducthandler = (req, res)=>{
   try {
        const {id} = req.params;
        const response = deleteProductController(id);
        res.send(response);
   } catch (error) {
        res.status(400).send({Error : error.message});
   }
};

 
module.exports = {
    getAllProductsHandler,
    getOneproductHandler ,
    createProductHandler,
    updateProductHandler,
    deletProducthandler
};










