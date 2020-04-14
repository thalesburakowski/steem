module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!src/database/migrations/**',
    '!src/server.js'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node'
}
