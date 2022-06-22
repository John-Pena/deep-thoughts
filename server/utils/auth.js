const jwt = require('jsonwebtoken');

const secret = 'mysecret';
const exipration = '2h';

module.exports = {
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: exipration });
  }
};