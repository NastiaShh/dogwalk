require('dotenv').config();
const express = require('express');
const expressConfig = require('./config/express');

const walkersRouter = require('./routes/walkers.router')

const app = express();

expressConfig(app);

// подключаем маршрутизацию
app.use('/api/walkers', walkersRouter)

// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`));
