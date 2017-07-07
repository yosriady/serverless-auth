module.exports.handler = (event, context, callback) => {
  console.log('getPangolins');
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      pangolins: [],
    }),
  };

  callback(null, response);
};
