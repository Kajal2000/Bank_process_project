let knex = require('../connection.js') 

let getdata = () => {
    return knex.select("*").from("singUp_tbl")
}


let get_data = () => {
    return knex.select("*").from("Admin_tbl")
}
let data = () => {
    return knex.select("*").from("Admin_tbl")
}

let eml_data = (Email_Id) => {
    return knex.select("*").from("singUp_tbl").havingIn("Email_Id",Email_Id)
}

let pass_data = (Password) => {
    return knex.select("*").from("singUp_tbl").havingIn("Password",Password)
}

let updata = (id,data) => {
    return knex("Admin_tbl").update(data).where('id',id)
}

let all_data_get = (id) => {
    return knex.select("*").from("Admin_tbl").where('id',id)
}
let post_user = (id,data) => {
    return knex("Approval_tbl").insert(data).where('id',id)
}

let get_all_data = (id) => {
    return knex.select("*").from("Admin_tbl").where("id",id)
}

let edit_data = (update_data,id) => {
    return knex("Admin_tbl").update(update_data).where("id",id)
}

let get_id_data1 = (user_id) => {
    return knex("*").from("Approval_tbl").where("user_id",user_id)
}
let post_loan_data = (post_data,id) => {
    return knex("loan_tbl").insert(post_data).where("id",id)
}
module.exports = {get_data,data,updata,all_data_get,post_user,
    getdata,eml_data,pass_data,get_all_data,edit_data,post_loan_data,get_id_data1}