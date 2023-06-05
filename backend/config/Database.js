import { Sequelize } from "sequelize";

const db = new Sequelize('db_full_stack', 'root','',{
    host:"localhost",
    dialect:'mysql'
})

export default db;