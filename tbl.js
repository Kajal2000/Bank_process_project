var knex_data = require("./connection")

// first tbl
knex_data.schema.createTable('singUp_tbl', (table) => {
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
    
// 3rd table

knex_data.schema.createTable('Approval_tbl', (table) => {
    table.increments("user_id")
    table.string("New_user");
    table.string("Approved");
    table.string("Rejected")
    }).then(()=>{
        console.log("tbl created")
    }).catch((err)=>{
        console.log(err)
    })

// 4th tbl for loan with interest

knex_data.schema.createTable('loan_tbl', (table) => {
    table.increments("id")
    table.integer("user_id").unsigned()
    table.foreign("user_id").references("Approval_tbl.user_id")
    table.string("Month");
    table.string("Interest");
    table.string("Discount")
    table.string("Total_cost")
    table.string("Total_amount")
    table.string("Approved")
    }).then(()=>{
        console.log("tbl created")
    }).catch((err)=>{
        console.log(err)
    })

// 5 tbl cheaking password into the hashing

knex_data.schema.createTable('sinUp', (table) => {
    table.increments("user_id")
    table.string("Name")
    table.string("Email");
    table.string("Password");
    }).then(()=>{
        console.log("tbl created")
    }).catch((err)=>{
        console.log(err)
    })