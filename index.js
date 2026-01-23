require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./utils/db');
const authRouter = require('./routes/auth.route.js');
const contactRouter = require('./routes/contact.route.js');
const productRouter = require('./routes/product.route');
const errorMiddleware = require('./middlewares/error.middleware.js');

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/form', contactRouter);
app.use('/api/products', productRouter);

app.use(errorMiddleware);

const port = 3000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
  });
});
