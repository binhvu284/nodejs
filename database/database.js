const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "taskcover-node-app",
  password: "binhgl284",
});

module.exports = pool.promise();
