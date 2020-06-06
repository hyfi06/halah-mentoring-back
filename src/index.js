const express = require('express');
const app = express();
const helmet = require('helmet');

const { config } = require('../config/index');

app.use(helmet());
app.use(express.json());

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
