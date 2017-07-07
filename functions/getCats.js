module.exports.handler = (event, context, callback) => {
  console.log('getCats');
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      cats: [],
    }),
  };

  callback(null, response);
};
