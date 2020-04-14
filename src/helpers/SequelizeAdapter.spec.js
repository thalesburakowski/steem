const UserModel = require('../app/models/user/User.model')
const SequelizeAdapter = require('./SequelizeAdapter')
const User = new SequelizeAdapter(UserModel)
const truncate = require('../../__tests__/utils/truncate')
const factory = require('../../__tests__/factories')
const faker = require('faker')

describe('SequelizeAdapter', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('Should create a user', async () => {
    const userBuilded = await factory.build('User')
    const user = await User.create(userBuilded.dataValues)
    expect(userBuilded.email).toBe(user.email)
  })

  it('Should not create a user', async () => {
    try {
      await User.create({
        username: 'Fail'
      })
    } catch (error) {
      expect(error).toBeTruthy()
    }
  })

  it('Should find a user', async () => {
    const user = await factory.create('User')
    const userFinded = await User.findOne({ where: { email: user.email } })
    expect(userFinded.email).toBe(user.email)
  })

  it('Should not find a user', async () => {
    try {
      const user = await factory.create('User')
      await User.findOne({ where: { email: user.email + 1 } })
    } catch (error) {
      expect(error).toBeTruthy()
    }
  })

  it('Should update a user', async () => {
    const userModel = await factory.create('User')
    const user = await User.findOne({ where: { email: userModel.email } })

    const userUpdated = await User.update(user, { ...user, email: user.email = 'thales@gmail.com' })
    expect(userUpdated.email).toBe('thales@gmail.com')
  })

  it('Should not update a user', async () => {
    try {
      const userModel = await factory.create('User')
      const user = await User.findOne({ where: { email: userModel.email } })

      await User.update(user, { ...user, email: user.email = null })
    } catch (error) {
      expect(error).toBeTruthy()
    }
  })

  it('Should return a list of users', async () => {
    const fakeUserList = generateFakeUsers(3)
    await factory.createMany('User', fakeUserList)
    const result = await User.listPaginated(1, 10)
    expect(result.Users.length).toBe(3)
  })

  it('Should return a list of 10 users', async () => {
    const fakeUserList = generateFakeUsers(13)
    await factory.createMany('User', fakeUserList)
    const result = await User.listPaginated(1, 10)
    expect(result.pages).toBe(2)
    expect(result.Users.length).toBe(10)
  })

  it('Should return a list of 3 users on page 2', async () => {
    const fakeUserList = generateFakeUsers(13)
    await factory.createMany('User', fakeUserList)
    const result = await User.listPaginated(2, 10)
    expect(result.pages).toBe(2)
    expect(result.Users.length).toBe(3)
  })

  it('Should delete a user', async () => {
    try {
      const user = await factory.create('User')
      const userFinded = await User.findOne({ where: { email: user.email } })
      expect(userFinded).toBeTruthy()
      await User.delete({ where: { email: user.email } })
      await User.findOne({ where: { email: user.email } })
    } catch (error) {
      expect(error).toBeTruthy()
    }
  })
})

function generateFakeUsers (quantity = 1) {
  const users = []
  for (let index = 0; index < quantity; index++) {
    users.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    })
  }
  return users
}
