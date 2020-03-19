let knex = require('../connection.js') 

// 1
let post1 = (create)=>{
    return knex("sinUp").insert(create)
}

// 2
let eml_data = (Email_Id) => {
    return knex.select("*").from("singUp_tbl").havingIn("Email_Id",Email_Id)
}

let pass_data = (Password) => {
    return knex.select("*").from("singUp_tbl").havingIn("Password",Password)
}

// 3
let post_data1 = () => {
    return knex("singUp_tbl").insert(post)
}

// 4
let put_data = (updata,Id) => {
    return knex('singUp_tbl').update(updata).where('Id',Id)
}

//5 
let eml_data1 = (Email_Id) => {
    return knex.select("*").from("singUp_tbl").havingIn("Email_Id",Email_Id)
}

let pass_data1 = (Password) => {
    return knex.select("*").from("singUp_tbl").havingIn("Password",Password)
}

// 6
let insert_data = (update) => {
    return knex('Admin_tbl').insert(update)
}

// 7
let get_data = () => {
    return knex.select("*").from("Admin_tbl")
}

// 8
let data = () => {
    return knex.select("*").from("Admin_tbl")
}

// 9
let updata = (id,data) => {
    return knex("Admin_tbl").update(data).where('id',id)
}

// 10
let all_data_get = (id) => {
    return knex.select("*").from("Admin_tbl").where('id',id)
}
let post_user = (id,data) => {
    return knex("Approval_tbl").insert(data).where('id',id)
}

// 11
let get_all_data = (id) => {
    return knex.select("*").from("Admin_tbl").where("id",id)
}

let edit_data = (update_data,id) => {
    return knex("Admin_tbl").update(update_data).where("id",id)
}

// 12
let get_id_data1 = (user_id) => {
    return knex("*").from("Approval_tbl").where("user_id",user_id)
}

let post_loan_data = (post_data,id) => {
    return knex("loan_tbl").insert(post_data).where("id",id)
}

// 13
let get_loan_data = (name_search) => {
    return knex("*").from("loan_tbl").where('id', 'like', '%' +name_search+ '%')
}
// 14
let get_all = () => {
    return knex.select("*").from("loan_tbl")
}

module.exports = {post1,eml_data,pass_data,post_data1,
    put_data,eml_data1,pass_data1,insert_data,get_data,
    data,updata,all_data_get,post_user,get_all_data,edit_data
    ,get_id_data1,post_loan_data,get_loan_data,get_all}