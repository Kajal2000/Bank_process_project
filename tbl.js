var knex_data = require("./connection")

// first tbl
knex_data.schema.createTable('Users_tbl', (table) => {
    table.increments("Id")
    table.string("Email_Id");
    table.string("Name");
    table.string("Password")
    }).then(()=>{
        console.log("tbl created")
    }).catch((err)=>{
        console.log(err)
    })

// sec tbl
knex_data.schema.createTable('Admin_tbl', (table) => {
    table.increments("id")
    table.string("customer");
    table.string("agent");
    table.string("agentApprove")
    table.string("admin")
    table.string("adminApprove")
    }).then(()=>{
        console.log("tbl created")
    }).catch((err)=>{
        console.log(err)
    })
    
    