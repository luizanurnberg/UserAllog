import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes/router';

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(function (request: Request, response: Response) {
    response.status(404).json({ msg : 'Você está tentando acessar uma rota inválida!'});
})

app.listen(PORT, () => {
    console.log('Aplicação rodando!');
})