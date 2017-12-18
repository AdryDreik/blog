/* _global require */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import config from './config/config.mjs';
import routes from './routes/index.mjs';
// import { sequelize } from './models/index.mjs';

const app = express();

app.use(morgan());
app.use(bodyParser.json());
app.use(cors());

routes(app);

// sequelize.sync().then(() => {
// });
app.listen(config.port);
console.log(`Servidor corriendo el puerto ${config.port}`);
