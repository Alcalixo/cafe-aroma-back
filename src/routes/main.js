const {Router} = require('express');
const productRouter = require('./productRoutes');
const mainRouter = Router();
const userRouter = require("./userRoutes");
const postRouter = require("./postRoutes");

//productos
mainRouter.use('/productos',productRouter);
//usuarios
mainRouter.use("/users", userRouter);
//posteos
mainRouter.use("/post", postRouter);
module.exports = mainRouter;

