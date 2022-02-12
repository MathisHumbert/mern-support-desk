require('dotenv').config();
require('colors');

const express = require('express');
const app = express();

const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorMiddleware');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to database
connectDB();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/api/users', userRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
