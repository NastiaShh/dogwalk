const profileRouter = require('express').Router();
const { Dog } = require('../db/models');

profileRouter
  .get('/', async (req, res) => {
    const { user } = res.locals
    try {
      if (user) {
        const dog = await Dog.findOne({ where: { user_id: user.id } })
        res.status(200).json(dog)
      }
    } catch (error) {
      res.status(500).json({ error: 'внутренняя ошибка сервера' })
    }
  })
  .post('/', async (req, res) => {
    try {
      const data = await Dog.create({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        size: req.body.size,
        gender: req.body.gender,
        sterilization: req.body.sterilization,
        dog_friendly: req.body.dog_friendly,
        cat_friendly: req.body.cat_friendly,
        overexposure: req.body.overexposure,
        home: req.body.home,
        vaccination: req.body.vaccination,
        description: req.body.description,
      });
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: 'не удалось создать заявку, проверьте заполнены ли все поля корректно?' })
    }
  });

module.exports = profileRouter;
