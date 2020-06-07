const MongoLib = require('../../lib/mongo');
const bcrypt = require('bcrypt');
const { config } = require('../../config');
const boom = require('@hapi/boom');

class UsersService {
  constructor() {
    this.collection = config.dbCollections.users;
    this.mongoDB = new MongoLib();
  }

  /**
   * Retrieve a user by id
   * @param {string} userId user id
   * @returns {object} user data
   */
  async getUser(userId) {
    const user = await this.mongoDB.get(this.collection, userId);
    return user || {};
  }

  /**
   * Retrieve a user by email
   * @param {string} email user id
   * @returns {object} user data
   */
  async getUserByEmail({ email }) {
    const [user] = await this.mongoDB.getAll(this.collection, { email });
    return user;
  }

  /**
   * Retrieve users by query
   * @param {string} query.typeOfUser query
   * @returns {object[]} users filtered
   */
  async getUsers(query, limit, offset) {
    const users = await this.mongoDB.getAll(
      this.collection,
      query,
      limit,
      offset
    );

    if (users.length == 0) {
      throw boom.notFound('Users cannot found in these filters');
    }
    return users || [];
  }

  /**
   * Create a new user
   * @param {object} user
   * @returns {string} created user id and  created user name
   */
  async createUser(user) {
    const checkUser = await this.mongoDB.getAll(this.collection, {
      email: user.email,
    });

    if (checkUser.length > 0) {
      throw boom.badRequest('User registered');
    }

    user.password = await bcrypt.hash(user.password, 10);

    const createUserId = await this.mongoDB.create(this.collection, user);

    return createUserId;
  }

  /**
   * Update user by id
   * @param {string} query.userId user id to update
   * @param {object} query.user user data
   * @returns {object} user id and user name of user updated
   */
  async updateUser({ userId, user }) {
    if (Object.keys(user).length == 0) {
      throw boom.badRequest('Not data to update');
    }

    const updateUserId = await this.mongoDB.update(
      this.collection,
      userId,
      user
    );

    return updateUserId;
  }

  async deleteUser(userId) {
    const deletedUserId = await this.mongoDB.delete(this.collection, userId);
    return deletedUserId || userId;
  }
}

module.exports = UsersService;
