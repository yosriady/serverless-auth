/**
  * GET /cats
  *
  * Returns a collection of cats.
  * @returns {Array.Object}
  */
module.exports.handler = (event, context, callback) => {
  console.log('getCats');
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      cats: [
        {
          id: 1,
          name: 'Furball',
          address: '2 Fur Lane',
        },
      ],
    }),
  };

  callback(null, response);
};
