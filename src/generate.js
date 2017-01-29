const faker = require('faker');
const _ = require('lodash');

module.exports = function () {
  return{
    swipeData: _.times(3, function() {
      return {
        image: faker.image.technics(),
        text: faker.lorem.words()
      }
    })
  }
}
