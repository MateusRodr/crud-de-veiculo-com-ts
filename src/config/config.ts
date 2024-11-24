require('dotenv').config();

module.exports = {
    development: {
        username: 'user',
        password: 'password',
        database:'bank_name',
        host: 'localhost',
        dialect: 'postgres'
    }
}