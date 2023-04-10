const seed = require('seed');
const db = require('./config/connection');

const startServer = async () => {
  await seed(); // Seed the database

  // Start the server
  await db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startServer();