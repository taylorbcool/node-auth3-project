const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, onlyUserType('admin'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

function onlyUserType(type) {
  return function(req, res, next) {
    if(req.user && req.user.type && req.user.type.toLowerCase() === type) {
      next();
    } else {
      res.status(403).json({ err: 'wrong user type' })    
    }
  }
}

module.exports = router;