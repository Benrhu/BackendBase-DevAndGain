import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import usersRouter from './users.routes';
import authRouter from './auth.routes';
import productRouter  from './product.routes';

const server = express();

const rootRouter = express.Router();

rootRouter.get('/', (req, res) => {
    LogInfo('GET: http://localhost:8000/api/')
    // Send Hello World
    res.send('Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/', rootRouter)
server.use('/users', usersRouter)
server.use('/auth', authRouter)
server.use('/products', productRouter)

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('Connected to MongoDB');
});

module.exports = rootRouter, server;