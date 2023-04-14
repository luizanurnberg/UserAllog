import express, { Request, Response, NextFunction } from 'express';
import { ERequestStatus } from './enums/enums';
import { EAPI } from './exceptions/EAPI/apiExceptions';
import { router } from './routes/router';

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(function (request: Request, response: Response) {
    return response.status(ERequestStatus.NOT_FOUND).json(
        EAPI.invalidRouteException(),
    );
})

app.listen(PORT, () => {
    console.log('Aplicação rodando!');
})