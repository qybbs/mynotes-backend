import { Sequelize } from "sequelize";

const db = new Sequelize('mynotes', 'root', '', {
    host: "34.101.81.83",
    dialect: "mysql"
});

export default db;
