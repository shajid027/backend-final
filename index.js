require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./utils/db');
const authRouter = require('./routes/auth.routes.js');

app.use(express.json());

app.use('/api/auth', authRouter);

const port = 3000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
  });
});
