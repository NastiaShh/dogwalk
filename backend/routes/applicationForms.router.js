const applicationFormsRouter = require('express').Router();

const { ApplicationForm } = require('../db/models');

applicationFormsRouter.get('/', async (req, res) => {
  try {
    const data = await ApplicationForm.findAll({
      order: [
        ['createdAt', 'DESC'],
        ['id', 'DESC'],
      ],
    })

    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'чета упала с сервака' })
  }
})

applicationFormsRouter.post('/', async (req, res) => {
  const data = await ApplicationForm.create({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    status: 'обрабатывается',
  });
  res.json(data);
});

module.exports = applicationFormsRouter
