exports.handler = async function() {
  return {
    statusCode: 200,
    body: JSON.stringify({ apiKey: process.env.FIREBASE_API_KEY })
  };
};
