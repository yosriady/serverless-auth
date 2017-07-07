module.exports.handler =  (event, context, callback) => {

  // TODO: for the sake of example, have two hardcoded users
  // one user have access to getPangolins, and it's encoded in the JWT

  // TODO: issue a JWT
  const jwt = 'blah';

  callback(null, { token: jwt });
}
