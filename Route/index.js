const express = require('express');
const app = express.Router();
const appdb  = require("../Model/indesxDB")
var jwt = require("jsonwebtoken")
var bcrypt = require('bcrypt');
const saltRounds = 10;

// 1
app.post('/user', function (req, res) {
    bcrypt.hash(req.body.Password, saltRounds, function (err,   hash) {
    var create = ({
        Name : req.body.Name,
        Email: req.body.Email,
        Password: hash
    })
    appdb.post1(create)
    .then((data)=>{
        res.send(data)
        console.log("inserted")
    }).catch((err)=>{
        console.log(err)
    })
    })
}); 

// 2
app.post("/loginApi",(req,res) => {
    var Password = req.body.Password;
    var Email_Id = req.body.Email_Id;
    appdb.eml_data(Email_Id)
    .then((logindata) => {
        if (logindata.length == 0){
            res.send("wrong h email")
        }else{appdb.pass_data(Password).then((logindata) =>{
            if (logindata.length == 0){
                res.send("Wrong h password")
            }else{
                bcrypt.hash(Password, saltRounds, function(err, hash) {
                    // console.log(hash)
                    bcrypt.compare(Password, hash, function(err, result) {
                        if (result){
                            console.log('match')
                            res.send('match')
                        }else{
                            console.log('not match')
                            res.send('not match')
                        }
                    });
                });
            }
        })
    }
    }).catch((err)=>{
        console.log(err); 
    })
});

// 3
app.post("/Apis",(req,res)=>{
    post = {
        Email_Id : req.body.Email_Id,
        Name : req.body.Name,
        Password : req.body.Password
    }
    appdb.post_data1(post)
    .then((resp_data)=>{
        res.send(resp_data)
    }).catch((err)=>{
        console.log(err)
    })
});

// 4
app.put('/update/:Id', function (req, res) {
    var Id = req.params.Id
    data_update = {
        Email_Id : req.body.Email_Id,
        Name : req.body.Name,
        Password : req.body.Password
    }
    appdb.put_data(data_update,Id)
    .then((resp_data)=>{
        res.send(resp_data)
    }).catch((err)=>{
        console.log(err)
    })
});

// 5
app.post("/login",(req,res) => {
    var Password = req.body.Password;
    var Email_Id = req.body.Email_Id;
    appdb.eml_data1(Email_Id)
    .then((logindata) => {
        // console.log(logindata)
        if (logindata.length == 0){
            res.send("wrong h email")
        }else{appdb.pass_data1(Password)
            .then((logindata) =>{
            if (logindata.length == 0){
                res.send("Wrong h password")
            }else{
                let newToken = jwt.sign({ "appdb" : logindata }, "kajal")
                    // console.log(newToken)
                    res.cookie(newToken)
                    res.send('loing successsful')
                }
            })
        }
    }).catch((err)=>{
        console.log(err); 
    })
});

// 6
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

// 7
app.get("/getApi",(req,res)=>{
    var data = appdb.get_data()
    data.then((res_data)=>{
        res.send(res_data)
    }).catch((err)=>{
        console.log(err)
    })
})

// 8
app.get("/customerApi",(req,res)=>{
    appdb.data()
    .then((res_data)=>{
        var list = []
        for(var i = 0; i<res_data.length; i++){
            var s_data = res_data[i]["customer"]
            list.push(s_data)
        }
        res.send({list})
    }).catch((err)=>{
        console.log(err)
    })
})

// 9
app.put('/putApi/:id',(req,res)=>{
    var id = req.params.id
    var data = {
        customer : req.body.customer,
        agent : req.body.agent,
        agentApprove : req.body.agentApprove,
        admin : req.body.admin,
        adminApprove : req.body.adminApprove
    }
    appdb.updata(id,data)
    .then((res_data)=>{
        res.send({res_data})
    }).catch((err)=>{
        console.log(err)
    })
});

// 10
app.get("/getApi/:id",(req,res)=>{
    let id = req.params.id
    var data = appdb.all_data_get(id)
    data.then((res_data)=>{
        var agentData = res_data[0]["agent"]
        var agentApproveData = res_data[0]["agentApprove"] 
        var adminData = res_data[0]["admin"]
        var adminApproveData = res_data[0]["adminApprove"]
        var customerName = res_data[0]["customer"]
        if (agentData == "Sona Sharma"){
            if(agentApproveData == "agent_yes"){  
                if (adminData == "Kasish Sharma"){
                    if(adminApproveData == "admin_yes"){
                       var customer =  customerName
                        var data = {
                            New_user : req.body.New_user,
                            Approved : customer
                        }
                    }
                    else if(adminApproveData == "admin_no"){
                        var customer =  customerName
                        var data = {
                            New_user : req.body.New_user,
                            Rejected : customer
                        }
                    }
                }
            }
            else if(agentApproveData == "agent_no"){  
                var customer =  customerName
                var data = {
                    New_user : req.body.New_user,
                    Rejected : customer
                }
            }
        }
        appdb.post_user(id,data)
        .then(() => {
            res.send("insert")
        }).catch((err) => {
            res.send(err)
        })
    })
});

// 11
app.get('/getdata/:id',(req,res) => {
    var id = req.params.id
    appdb.get_all_data(id)
    .then((Response) => {
        customer = Response[0]["customer"]
        admin = Response[0]["admin"]
        adminApprove = Response[0]["adminApprove"]
        agent = Response[0]["agent"]
        agentApprove = Response[0]["agentApprove"]
        if(agentApprove == "agent_no"){            
            var update_data = {
                customer : customer,
                admin : admin,
                adminApprove : adminApprove,
                agent : agent,
                agentApprove : req.body.agentApprove
            }
            appdb.edit_data(update_data,id)
            .then((resp_data)=>{
                console.log(resp_data)
            }).catch((err)=>{
                console.log(err)
            })
       }
    })
});

// 12
app.get("/GetApiData/:user_id",(req,res)=>{
    var user_id = req.params.user_id
    appdb.get_id_data1(user_id)
    .then((data)=>{
    Approved = data[0]["Approved"]
    let post_data = {
        user_id : req.body.user_id,
        Month : req.body.Month,
        Interest : req.body.Interest,
        Discount : req.body.Discount,
        Total_cost : req.body.Total_cost,
        Total_amount : req.body.Total_amount,
        Approved : Approved
    }
    appdb.post_loan_data(post_data)
    .then((res_data)=>{
        res.send(res_data)
    }).catch((err)=>{
        console.log(err)
    })
    })
})

// 13
app.get('/get/:id',(req,res) => {
    var id = req.params.id
    appdb.get_loan_data(id)
    .then((Response) => {
        res.send(Response)
    }).catch((err) => {
        res.send(err)
    })
});

// 14
app.get('/getAllApi',(req,res) => {
    appdb.get_all()
    .then((Response) => {
        res.send(Response)
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = app;
