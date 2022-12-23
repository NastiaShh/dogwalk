const walkersRouter = require('express').Router();

const { Walker } = require('../db/models');

walkersRouter.get('/', async (req, res) => {
  try {
    const walkers = await Walker.findAll({
      order: [
        ['createdAt', 'DESC'],
        ['id', 'DESC'],
      ],
    })

    res.json(walkers)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'чета упала с сервака' })
  }
})

module.exports = walkersRouter
