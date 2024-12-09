const { Router } = require("express");

const {
  getAllOrdersHandler,
  getOneOrderHandler,
  createOrderHandler,
  updateOrderHandler,
  deleteOrderHandler,
} = require("../handlers/orderHandler");

const orderRouter = Router();

//Ordenes
orderRouter.get("/", getAllOrdersHandler);

orderRouter.get("/:id", getOneOrderHandler);

// orderRouter.get("/customer/:id",getOneOrderByCustomerHandler );

orderRouter.post(
  "/",
  createOrderHandler
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ordersSchema"
                    }  
                }
            }
        } 
    */
);

orderRouter.put("/:id", updateOrderHandler);

orderRouter.delete("/:id", deleteOrderHandler);

module.exports = orderRouter;
