
const express = require("express");

const Router = new express.Router();
const app =  express();
const bodyparser = require("body-parser");

const { Sequelize } = require('sequelize');




app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));





app.use(express.json());




app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
    
  });

cors = require("cors");
app.use(cors());






const sequelize = require('./util/sequlize');

sequelize.sync().then(data=>{
  const server = app.listen(process.env.PORT || 3001);
  console.log('database conected');
})

const user_route = require("./routes/user_route");

app.use(user_route);








