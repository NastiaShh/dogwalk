const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

authRouter.get('/user', async (req, res) => {
  const { user } = res.locals;
  if (user) {
    res.json({
      isLoggedIn: true,
      user,
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});

authRouter.post('/register', async (req, res) => {
  const { name, email, phone, password, passwordRepeat } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  // проверяем есть ли уже такой пользователь в БД
  if (existingUser) {
    res.status(401).json({ error: 'Такой пользователь уже есть' });
    return;
  }

  if (password === passwordRepeat) {
    const user = await User.create({
      name,
      email,
      phone,
      password: await bcrypt.hash(password, 10),
      role: 'user',
    })

    req.session.userId = user.id;
    res.status(201).json({ user });
  } else {
    res.status(401).json({ error: 'Пароли не совпадают' });
    // res.status(401).send({ error: 'Пароли не совпадают'});
  }
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ where: { email } });

  // проверяем, что такой пользователь есть в БД и пароли совпадают
  if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
    // кладём id нового пользователя в хранилище сессии (логиним пользователя)
    req.session.userId = existingUser.id;
    req.session.user = existingUser;
    res.json({ id: existingUser.id, name: existingUser.name });
  } else {
    res.status(401).json({ error: 'Неверный email или пароль' });
  }
});

authRouter.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

module.exports = authRouter;
