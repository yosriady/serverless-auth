const jwt = require('jsonwebtoken');

const users = require('../lib/users');

module.exports.handler =  (event, context, callback) => {
  console.log('login');
  const { username, password } = JSON.parse(event.body);

  try {
    // Authenticate user
    const user = users.login(username, password);

    // Issue JWT
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log(`JWT issued: ${token}`);
    const response = { // Success response
      statusCode: 200,
      body: {
        token,
      }
    }
    callback(null, response);
  } catch (e) {
    console.log(`Error logging in: ${e.message}`);
    const response = { // Error response
      statusCode: 500,
      body: {
        error: e.message,
      }
    }
    callback(null, response);
  }
}
