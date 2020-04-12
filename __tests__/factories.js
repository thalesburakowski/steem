const faker = require('faker')
const { factory } = require('factory-girl')
const User = require('../src/app/models/user/User.model')

factory.define('User', User, {
  email: faker.internet.email(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
  country: faker.address.country(),
  state: faker.address.state(),
  city: faker.address.city(),
  avatar: faker.internet.avatar(),
  bio: faker.internet.color()

})

module.exports = factory
