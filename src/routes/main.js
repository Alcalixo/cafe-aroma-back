const {Router} = require('express');
const productRouter = require('./productRoutes');
const mainRouter = Router();
const userRouter = require("./userRoutes");
const postRouter = require("./postRoutes");

//productos
mainRouter.use('/productos',productRouter
// #swagger.tags = ['Productos']
);
//usuarios
mainRouter.use("/users", userRouter
  /*
  #swagger.tags = ['Usuarios']
  #swagger.security = [{
      "bearerAuth": []
  }]
  */
);
//posteos
mainRouter.use("/post", postRouter
// #swagger.tags = ['Posteos']
);
module.exports = mainRouter;

