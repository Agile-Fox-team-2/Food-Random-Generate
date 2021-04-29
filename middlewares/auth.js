const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authentication = (req, res, next) => {
  if (!req.headers.access_token) return next({ name: 'MissingToken' });

  try {
    const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET);
    req.userId = decoded.id;
  } catch (err) {
    return next({ name: 'InvalidToken' });
  }

  User.findByPk(req.userId)
    .then((user) => {
      if (!user) throw { name: 'UserNotFound' };
      next();
    })
    .catch((err) => next(err));
};

const authorization = (req, res, next) => {
  const { id } = req.params;

  // Food.findOne({ where: { id: id, UserId: req.userId } })
  //   .then((food) => {
  //     if (!food) throw { name: 'FoodNotFound' };

  //     req.food = food;
  //     next();
  //   })
  //   .catch((err) => next(err));
};

module.exports = { authentication, authorization };