import { DataTypes } from "sequelize";
import { sql_config } from "../connection.js";


const User = sql_config.define('tbl_user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        required:true
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        required:true
    },
    age:{
        type:DataTypes.INTEGER,
    }
})



export default User