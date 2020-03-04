const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())

const data = require("./Route/index")
app.use("/api",data)
 

app.listen(8000,()=>{
    console.log("server is listening..............)")
});