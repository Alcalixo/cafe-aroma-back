const express = require("express");
const morgan = require("morgan");
const MainRouter = require("./routes/main");
 
const app = express();

app.use(express.json());

app.use(morgan('dev'));
app.use('/api', MainRouter);

module.exports = app;