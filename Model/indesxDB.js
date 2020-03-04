let knex = require('../connection.js') 

let postdata = (data) => {
    return knex("Users_tbl").insert(data)
}

let insert_data = (data) => {
    return knex("Admin_tbl").insert(data)
}

let get_data = () => {
    return knex.select("*").from("Admin_tbl")
}
let data = () => {
    return knex.select("*").from("Admin_tbl")
}
module.exports = {postdata,insert_data,get_data,data}