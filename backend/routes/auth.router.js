const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

authRouter.get('/user', async (req, res) => {
  const { user } = res.locals;

  if (user) {
    const role = await user.role;

    res.json({
      isLoggedIn: true,
      user,
      role
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});

authRouter.post('/register', async (req, res) => {
  const { name, email, phone, password, passwordRepeat } = req.body;

  const existingUser = await User.findOne({ where: { email } });
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
    res.status(201).json({ user, role: user.role });
  } else {
    res.status(401).json({ error: 'Пароли не совпадают' });
  }
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
    req.session.userId = existingUser.id;
    req.session.user = existingUser;
    res.json({ id: existingUser.id, name: existingUser.name, role: existingUser.role });
  } else {
    res.status(401).json({ error: 'Неверный email или пароль' });
  }
});

authRouter.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user_sid').status(200).json({ success: true });
  });
});

module.exports = authRouter;
