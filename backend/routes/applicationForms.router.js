const applicationFormsRouter = require('express').Router();

const { ApplicationForm } = require('../db/models');

applicationFormsRouter
  .get('/', async (req, res) => {
    try {
      const data = await ApplicationForm.findAll({
        order: [
          ['createdAt', 'DESC'],
          ['id', 'DESC'],
        ],
      })

      res.json(data)
    } catch (error) {
      res.status(500).json({ error: 'чета упала с сервака' })
    }
  })
  .post('/', async (req, res) => {
    const data = await ApplicationForm.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      date: req.body.date,
      time: req.body.time,
      status: 'обрабатывается',
    });
    res.json(data);
  })
  .put('/change/:id', async (req, res) => {
    let newStatus
    const { id } = req.params
    const { status } = req.body
    if (status === 'обработано') {
      newStatus = 'обрабатывается'
    } else {
      newStatus = 'обработано'
    }
    try {
      const request = await ApplicationForm.findOne({ where: { id: Number(id) } })
      request.status = newStatus
      request.save()
      res.json(request)
    } catch (error) {
      res.status(500).json({ error: 'чета упала с сервака' })
    }
  })
  .delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const reqDestoy = await ApplicationForm.destroy({ where: { id } })
      if (reqDestoy) {
        res.status(202).json(id)
      }
    } catch (error) {
      res.status(500).json({ error: 'чета упала с сервака' })
    }
  })

module.exports = applicationFormsRouter
