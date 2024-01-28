import express from 'express'
import userRouters from './src/modules/Users/user.routes.js'
import notRouters from './src/modules/Notes/notes.routes.js'
import { db_connection } from './DB/connection.js'
const app = express()
app.use(express.json())
app.use(userRouters,notRouters)

db_connection()

app.listen(3000,()=>{
    console.log("server is running........");
})