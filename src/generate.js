const faker = require('faker');
const _ = require('lodash');

module.exports = function () {
  return{
    swipeData: _.times(3, function() {
      return {
        image: faker.image.technics(),
        text: faker.lorem.words()
      }
    }),
    grid1Data: _.times(2, function() {
      return {
        image: faker.image.transport(),
        buttonText: faker.commerce.price(),
        subText: faker.commerce.productName(),
        greenText: faker.commerce.department(),
      }
    }),
    grid2Data: _.times(2, function() {
      return {
        image: faker.image.fashion(),
        buttonText: faker.commerce.price(),
        subText: faker.commerce.productName(),
        greenText: faker.commerce.department(),
      }
    })
  }
}
