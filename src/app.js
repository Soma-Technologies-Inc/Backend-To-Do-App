const express =require('express')
const app=express();
const bodyParser= require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
const router=require('./routes/index');
app.use(router);
app.listen(5000);
console.log('server is running properly');