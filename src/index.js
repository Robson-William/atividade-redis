import router from './routes/index.js';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.API_PORT;

app.use(router);

app.listen(port, console.log(`Api rodando na porta ${port}`));
