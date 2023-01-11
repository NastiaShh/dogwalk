const profileRouter = require('express').Router();
const { User } = require('../db/models');

profileRouter
  .get('/:id', async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      res.status(404).json({ message: 'User not found' })
    } else {
      res.json(user)
    }
  })
  // .put('/:id', async (req, res) => {

  // });

module.exports = profileRouter;
