const { resourcesMock } = require('../mocks/resources');
const ResourcesService = require('../../components/resources/service');

const resourcesService = new ResourcesService();

function main() {
  const res = resourcesMock.map(async resource => {
    const id = await resourcesService.createResource(resource);
    console.log(id);
    return id;
  });

  Promise.all(res).then((response) => {
    console.log(response.length);
    process.exit(0);
  }).catch(err => {
    console.log(err);
    process.exit(1);
  })
};

main();