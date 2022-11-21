import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import "express-async-errors"

//db and autenticateUser
import connectDB from './db/connect.js'

//router
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ msg: "Welcome!" })
})

app.get("/api/v1", (req, res) => {
    res.json({ msg: "API" })
})

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async() => {
    try {
        //console.log(process.env.MONGO_URL)
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`)
        })
    } catch (error) {
    console.log(error)
    }
}

start()