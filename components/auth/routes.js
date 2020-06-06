const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const ApiKeysService = require('./service');
const UsersService = require('../users/service');

const { config } = require('../../config');

// Basic strategy
require('../../utils/auth/strategies/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/v1/auth', router);

  const apiKeysService = new ApiKeysService();
  const usersService = new UsersService();

  router.post('/sign-in', async function (req, res, next) {
    const { apiKeyToken } = req.body;

    if (!apiKeyToken) {
      next(boom.unauthorized('apiKeyToken is required'));
      return;
    }

    passport.authenticate('basic', function (error, user) {
      try {
        if (error || !user) {
          next(boom.unauthorized('Please verify username or password'));
          return;
        }
        req.login(user, { session: false }, async function (error) {
          if (error) {
            next(error);
            return;
          }

          const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken });

          if (!apiKey) {
            next(boom.unauthorized());
            return;
          }

          const {
            _id: id,
            firstName,
            imageURL,
            lastName,
            typeOfUser,
            email,
          } = user;

          const payload = {
            sub: id,
            email,
          };

          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: '5d',
          });

          return res.status(200).json({
            token,
            user: {
              id,
              typeOfUser,
              imageURL,
              firstName,
              lastName,
              email,
            },
          });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  router.post('/sign-up', async (req, res, next) => {
    const { body: user } = req;

    try {
      const createdUserId = await usersService.createUser(user);

      res.status(201).json({
        data: createdUserId,
        message: 'user created',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = authApi;
