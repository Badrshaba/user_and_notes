import { Sequelize } from "sequelize";

export const sql_config = new Sequelize("notes_users", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const db_connection = async() => {
 await sql_config
    .sync({alter:true})
    .then((res) => console.log("DB connection success"))
    .catch((err) => console.log("DB connection fail", err));
};
