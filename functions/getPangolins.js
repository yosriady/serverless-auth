/**
  * GET /pangolins
  *
  * Returns a collection of pangolins.
  * @returns {Array.Object}
  */
module.exports.handler = (event, context, callback) => {
  console.log('getPangolins');
  console.log(event);

  const user = JSON.parse(event.requestContext.authorizer.user);
  console.log(user);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      pangolins: [
        {
          id: 2,
          name: 'Pengu',
          address: '123 Carapace Drive',
        },
      ],
    }),
  };

  callback(null, response);
};
