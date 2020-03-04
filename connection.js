var knex_data = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'Kajal@123',
        database : 'Bank_project'
    }
});

module.exports = knex_data;