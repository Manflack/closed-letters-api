import express from 'express';
import cors from 'cors';
import { analyzeWord, analyzeWordByExtendedDatabase } from './controller/WordController'
import { saveNewCharacterToExtendendDatabase, resetDatabase } from './controller/CharactersController'

const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(cors());
app.use(morgan('common'))

app.use('/api/v1/analyze-word', analyzeWord);
app.use('/api/v1/analyze-word-extended', analyzeWordByExtendedDatabase);
app.use('/api/v2/save-char', saveNewCharacterToExtendendDatabase);
app.use('/api/v2/reset-database', resetDatabase);

app.listen(3000);

export default app;