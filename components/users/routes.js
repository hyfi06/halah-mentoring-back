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
        const { query } = req;
        const limit = query.limit ? parseInt(query.limit) : 10;
        const page = query.page ? parseInt(query.page) : 0;

        delete query.limit;
        delete query.page;

        const offset = page ? page * limit : 0;

        const users = await usersService.getUsers(query, limit, offset);
        const nextpage =
          users.length < limit
            ? null
            : `/v1/user?limit=${limit}&page=${page + 1}`;

        users.forEach((user) => {
          delete user.password;
        });

        res.status(200).json({
          next: nextpage,
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
        delete user.password;
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
        const updatedUserId = await usersService.updateUser({ userId, user });
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
