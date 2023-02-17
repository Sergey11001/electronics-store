const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const routes = require("./routes");
const fileUpload = require('express-fileupload')
const errorHandler = require('./middleware/ApiHandlerMiddleware')
const path = require('path')

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api', routes)


app.use(errorHandler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log("Server is starting on", PORT)
        })
    }
    catch (e){
        console.log(e)
    }
}

start()