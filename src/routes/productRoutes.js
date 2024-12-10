const {Router} = require('express');
const productRouter = Router();
const {getAllProductsHandler, getOneproductHandler , createProductHandler,updateProductHandler,deleteProductHandler,} = require('../handlers/productHandler');
const authUser = require("../middlewares/authUser");


//productos
productRouter.get("/", getAllProductsHandler);

productRouter.get("/:id",getOneproductHandler );

productRouter.post("/", createProductHandler);

productRouter.put("/:id", updateProductHandler);

productRouter.delete("/:id",deleteProductHandler);

module.exports = productRouter;
