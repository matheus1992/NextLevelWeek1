import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());

// extensao para JSON
app.use(express.json());

// carrega rotas
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// VALIDACOES
app.use(errors());

app.listen(3333);