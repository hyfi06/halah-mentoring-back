const express = require('express');
const passport = require('passport');
const UsersService = require('./service');

require('../../utils/auth/strategies/jwt');

function userApi(app) {
  const router = express.Router();

  app.use('/v1/users', router);

  const usersService = new UsersService();
  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    async function (req, res, next) {
      try {
        const { typeOfUser } = req.query;
        const users = await usersService.getUsers({ typeOfUser });

        res.status(200).json({
          data: users,
          message: 'users retrieved',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    '/:userId',
    passport.authenticate('jwt', { session: false }),
    async function (req, res, next) {
      try {
        const { userId } = req.params;
        const user = await usersService.getUser(userId);
        res.status(200).json({
          data: user,
          message: 'user retrieved',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.patch(
    '/:userId',
    passport.authenticate('jwt', { session: false }),
    async function (req, res, next) {
      try {
        const { userId } = req.params;
        const user = req.body;
        const updatedUserId = await usersService.updateUser(user);
        res.status(200).json({
          data: updatedUserId,
          message: 'user updated',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:userId',
    passport.authenticate('jwt', { session: false }),
    async function (req, res, next) {
      try {
        const { userId } = req.params;
        const deletedUserId = await usersService.deleteUser(userId);
        res.status(200).json({
          data: deletedUserId,
          message: 'user deleted',
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = userApi;
