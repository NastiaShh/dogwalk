require('dotenv').config();
const path = require('path');
const express = require('express');
const expressConfig = require('./config/express');

const walkersRouter = require('./routes/walkers.router')

const app = express();

expressConfig(app);

// подключаем маршрутизацию
app.use('/api/walkers', walkersRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`));
