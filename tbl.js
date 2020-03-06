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

knex_data.schema.createTable('loan_with_ints', (table) => {
    table.increments("id")
    table.integer("Month");
    table.integer("Interest");
    table.integer("Discount")
    table.integer("Total_cost")
    table.integer("Total_amount")
    }).then(()=>{
        console.log("tbl created")
    }).catch((err)=>{
        console.log(err)
    })