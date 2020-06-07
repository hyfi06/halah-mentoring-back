const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

const notFoundHandler = require('../utils/middleware/notFoundHandler');
const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('../utils/middleware/errorHandler');

const { config } = require('../config/index');

const authApi = require('../components/auth/routes');
const userApi = require('../components/users/routes');
const resourcesApi = require('../components/resources/routes');

app.use(helmet());
app.use(cors());
app.use(express.json());

//Routes
authApi(app);
userApi(app);
resourcesApi(app);

// Catch 404
app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
