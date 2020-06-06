const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

const { config } = require('../config/index');

const authApi = require('../components/auth/routes');
const userApi = require('../components/users/routes');

app.use(helmet());
app.use(cors());
app.use(express.json());

//Routes
authApi(app);
userApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
