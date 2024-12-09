const { Router } = require("express");
const productRouter = require("./productRoutes");
const mainRouter = Router();
const userRouter = require("./userRoutes");
const postRouter = require("./postRoutes");

//usuarios
mainRouter.use(
  "/api/users",
  userRouter
  /*
  #swagger.tags = ['Usuarios']
  #swagger.security = [{
      "bearerAuth": []
  }]
  */
);
//productos
mainRouter.use(
  "/api/productos",
  productRouter
  // #swagger.tags = ['Productos']
);
//posteos
mainRouter.use(
  "/api/post",
  postRouter
  // #swagger.tags = ['Posteos']
);
module.exports = mainRouter;
