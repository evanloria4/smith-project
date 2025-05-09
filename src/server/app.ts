import express from 'express';
import path from 'path';

const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist');

const app = express();

app.use(express.static(DIST_DIR));
app.use(express.json());

export default app;
