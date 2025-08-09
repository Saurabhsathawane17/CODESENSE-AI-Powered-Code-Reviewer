require('dotenv').config(); // Load environment variables from .env file

const app = require('./src/app');


app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000/');
});// This code initializes an Express server and listens on port 3000. 
// It imports the Express application from `./src/app` and starts the server, logging a message to the console when it is ready.
// The server will respond to incoming requests on port 3000, allowing for further development of