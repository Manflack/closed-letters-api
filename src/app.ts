import express from 'express';
import cors from 'cors';
import { analyzeWord } from './controller/WordController'

const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(cors());
app.use(morgan('common'))

app.use('/api/v1/analyze-word', analyzeWord);

app.listen(3000);

export default app;