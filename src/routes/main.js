const {Router} = require('express');
const producRouter = require('./producRoutes');
const MainRouter = Router();

//productos
MainRouter.use('/productos',producRouter);


module.exports = MainRouter;

