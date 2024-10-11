import mysql from 'mysql2/promise.js'






export const conection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PWD,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB
})







console.log('db conectado')