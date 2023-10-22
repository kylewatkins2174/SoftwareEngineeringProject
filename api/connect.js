import mysql from "mysql"

const mysqlConfig = {
    connectionLimit: 10,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "things"
}

const pool = mysql.createPool(mysqlConfig)
export default pool