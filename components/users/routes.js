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
    async function (req, res, next) {
      try {
        const { query } = req;
        const { limit, offset } = query;

        delete query.limit;
        delete query.offset;
        const users = await usersService.getUsers(query, limit, offset);

        users.forEach((user) => {
          delete user.password;
        });

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
