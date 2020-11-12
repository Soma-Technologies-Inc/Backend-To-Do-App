import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/index';

const app = express();
app.use(bodyParser.json());
app.use(router);


const port=process.env.port || 4000;
app.listen(port, ()=>console.log(`server is loading on ${port}`));