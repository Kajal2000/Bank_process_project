const express = require('express');
const app = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const appdb  = require("../Model/indesxDB")

app.post('/create', function (req, res) {
    bcrypt.hash(req.body.Password, saltRounds, function (err, hash) {
    let data = {
        Email_Id: req.body.Email_Id,
        Name : req.body.Name,
        Password : hash
    }
    appdb.postdata(data)
    .then((res_data)=>{
        res.send(res_data)
    }).catch((err)=>{
        console.log(err)
    })
    })
});

app.post('/postApi',(req,res)=>{
    let data1 = {
        customer : req.body.customer,
        agent : req.body.agent,
        agentApprove : req.body.agentApprove,
        admin : req.body.admin,
        adminApprove : req.body.adminApprove
    }
    appdb.insert_data(data1)
    .then((res_data)=>{
        res.send(res_data)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get("/getApi",(req,res)=>{
    var data = appdb.get_data()
    data.then((res_data)=>{
        res.send(res_data)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get("/customerApi",(req,res)=>{
    appdb.data()
    .then((res_data)=>{
        for(var i = 0; i<res_data.length; i++){
        var s_data = res_data[i]["customer"]
        console.log(s_data)
        }
    })
})
module.exports = app;