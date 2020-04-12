const User = require('./User.model')

const truncate = require('../../../../__tests__/utils/truncate')
describe('User', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('Should create a user', async () => {
    const user = await User.create({
      email: 'thales@gmail.com',
      username: 'Murralsee',
      password: '123456',
      country: 'Brazil',
      state: 'São Paulo',
      city: 'Mogi das Cruzes',
      avatar: 'endereco-virtual',
      bio: 'Melhor dev ever'
    })

    expect(user).toBeTruthy()
    expect(user.email).toBe('thales@gmail.com')
    expect(user.username).toBe('Murralsee')
    expect(user.password).toBe('123456')
    expect(user.country).toBe('Brazil')
    expect(user.state).toBe('São Paulo')
    expect(user.city).toBe('Mogi das Cruzes')
    expect(user.avatar).toBe('endereco-virtual')
    expect(user.bio).toBe('Melhor dev ever')
  })
})
