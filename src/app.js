import express from "express";
import bodyParser from "body-parser";
import router from "../src/routes/index";

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api',router);


const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`server is running at ${port}`));

