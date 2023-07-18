const sequelize = require("sequelize");

const db = new sequelize("appnodejs", "root", "", {
    dialect: "mysql"
});

db.sync({});

module.exports = db;