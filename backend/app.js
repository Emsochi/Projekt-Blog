import * as express from "express";
import * as cors from 'cors'

const app = express();
app.use(cors({
    origin: 'http://localhost:3001',
}))
app.use(express.json());