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

      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'внутренняя ошибка сервера' })
    }
  })
  .post('/', async (req, res) => {
    try {
      const data = await ApplicationForm.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time,
        status: 'не обработано',
      });
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: 'не удалось создать заявку, проверьте заполнены ли все поля корректно?' })
    }
  })
  .put('/change/:id', async (req, res) => {
    let newStatus
    const { id } = req.params
    const { status } = req.body
    try {
      if (status === 'не обработано') {
        newStatus = 'в работе'
      } else if (status === 'в работе') {
        newStatus = 'завершено'
      } else {
        newStatus = 'не обработано'
      }
      const request = await ApplicationForm.findOne({ where: { id: Number(id) } })
      request.status = newStatus
      request.save()
      res.status(202).json(request)
    } catch (error) {
      res.status(500).json({ error: 'внутренняя ошибка сервера' })
    }
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
      const reqDestoy = await ApplicationForm.destroy({ where: { id } })
      if (reqDestoy) {
        res.status(202).json(id)
      }
    } catch (error) {
      res.status(500).json({ error: 'внутренняя ошибка сервера' })
    }
  })

module.exports = applicationFormsRouter
