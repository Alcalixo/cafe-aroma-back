const { Router } = require("express");

const orderRouter = Router();

//Ordenes
orderRouter.get("/", getAllOrdersHandler);

orderRouter.get("/:id",getOneOrderHandler );

// orderRouter.get("/customer/:id",getOneOrderByCustomerHandler );

orderRouter.post("/", createOrderHandler);

orderRouter.put("/:id", updateOrderHandler);

orderRouter.delete("/:id",deleteOrderHandler);

module.exports = orderRouter;