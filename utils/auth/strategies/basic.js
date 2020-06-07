const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UsersService = require('../../../components/users/service');

passport.use(
  new BasicStrategy(async function (email, password, cb) {
    const userService = new UsersService();

    try {
      const user = await userService.getUserByEmail({ email });

      if (!user) {
        return cb(
          boom.unauthorized('Please verify username or password'),
          false
        );
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return cb(boom.unauthorized('Please verify password'), false);
      }

      delete user.password;

      return cb(null, user);
    } catch (error) {
      return cb(error);
    }
  })
);
