const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets.js')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ err: 'invalid token' })
      } else {
        req.user = { name: decodedToken.username };

        next();
      }
    })
  } else {
    res.status(401).json({ err: 'missing token' })
  }
};