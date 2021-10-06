import dotenv from 'dotenv'

dotenv.config()


import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import routes from './routes/index'
import {SocketServer} from "./config/socket";
import {Server, Socket} from 'socket.io'
import {createServer} from 'http'

//middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

const http = createServer(app)

export const io = new Server(http)
io.on('connection', (socket: Socket) => {
    SocketServer(socket)
})

//routes

app.use('/api', routes.authRouter)
app.use('/api', routes.userRouter)
app.use('/api', routes.categoryRouter)
app.use('/api', routes.blogRouter)
app.use('/api', routes.commentRouter)

//database
import './config/database'



//server
const PORT = process.env.PORT || 5000
http.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})
