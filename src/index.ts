import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';

import router from './routes.routes';

const app = express();

mongoose.connect(process.env.APP_MONGO_URL || 'default', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log('Server is on!');
});
