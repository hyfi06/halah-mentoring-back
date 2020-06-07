const MongoLib = require('../../lib/mongo');
const bcrypt = require('bcrypt');
const { config } = require('../../config');
const boom = require('@hapi/boom');

class resourcesService {
  constructor() {
    this.collection = config.dbCollections.resources;
    this.mongoDB = new MongoLib();
  }

  async getResources({ categories }) {
    const query = { categories };

    const resources = await this.mongoDB.getAll(this.collection, query);

    if (resources.length == 0) {
      throw boom.notFound('Resources cannot found in these filters');
    }
    return resources || [];
  }

  async getResource(resourceId) {
    const resource = await this.mongoDB.get(this.collection, resourceId);
    return resource || {};
  }

  async createResource(resource) {
    const createResourcesId = await this.mongoDB.create(this.collection, resource);

    return createResourcesId;
  }

  async updateResource({ resourceId, resource }) {
    if (Object.keys(resource).length == 0) {
      throw boom.badRequest('Not data to update');
    }

    const updateResourceId = await this.mongoDB.update(
      this.collection,
      resourceId,
      resource,
    );

    return updateResourceId;
  }

  async deleteResource(resourceId) {
    const deletedResourceId = await this.mongoDB.delete(this.collection, resourceId);
    return deletedResourceId || resourceId;
  }
}

module.exports = resourcesService;
