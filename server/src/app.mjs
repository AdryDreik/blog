import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(morgan());
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.send('Hello word');
});

app.listen(process.env.PORT || 4000);

