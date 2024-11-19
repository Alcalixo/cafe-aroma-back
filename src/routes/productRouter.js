const {Router} = require('express');
const {getAllProductsHandler, getOneproductHandler , createProductHandler,updateProductHandler,deletProducthandler,} = require('../handlers/productHandler');
const producRouter = Router();


//productos
producRouter.get("/", getAllProductsHandler);

producRouter.get("/:id",getOneproductHandler );

producRouter.post("/", createProductHandler);

producRouter.put("/:id", updateProductHandler);

producRouter.delete("/:id",deletProducthandler);

module.exports = producRouter;
