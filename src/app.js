import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import config from 'config';
import routes from './routes';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
routes(app);

// db
const dbUrl = config.get('db.host');
console.log(dbUrl);
mongoose.connect(config.get('db.host'), { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, '❌ connection error:'));
db.once('open', () => {
  console.log(`✅  db connected`);
});

// start
app.listen(3000, () => {
  console.log(`✅  server running on port http://localhost:3000`);
});
