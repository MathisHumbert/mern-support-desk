require('dotenv').config();

const express = require('express');
const app = express();

const userRouter = require('./routes/userRoutes');

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
