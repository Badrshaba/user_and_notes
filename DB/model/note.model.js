import { DataTypes } from "sequelize";
import { sql_config } from "../connection.js";
import User from "./user.model.js";

const Note = sql_config.define('tbl_note',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        required:true
    },
    content:{
        type:DataTypes.STRING,
        required:true
    },
})

User.hasMany(Note,{
    foreignKey: "userId",
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})

Note.belongsTo(User,{foreignKey:"userId",targetKey:"id"})



export default Note