import express from 'express';
import cors from 'cors';
import { analyzeWord } from './controller/WordController'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/analyze-word', analyzeWord);

app.listen(3000);

export default app;