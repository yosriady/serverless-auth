// Disclaimer: This is not ready for production, obviously.
const _ = require('lodash');

const UsersDB = {
  Cthon98: {
    password: 'hunter2', // User password
    scopes: [], // Authorized actions
  },
  AzureDiamond: {
    password: '*********',
    scopes: ['pangolins:read'],
  },
};

const login = (username, password) => {
  const hasUser = (_.has(UsersDB, username));
  if (!hasUser) throw new Error('User not found!');

  const user = UsersDB[username];
  const hasValidPassword = (user.password === password);
  if (!hasValidPassword) throw new Error('Invalid password');

  return user;
};

module.exports = {
  login,
};
