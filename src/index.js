const express = require('express');
const app = express();
const helmet = require('helmet');

const { config } = require('../config/index');

const userApi = require('../components/users/routes');

app.use(helmet());
app.use(express.json());
app.use(userApi);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
