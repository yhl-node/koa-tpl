module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test/'],
  collectCoverage: true,
  testMatch: [
    '**/test/**/*.test.js'
  ],
  transform: {
    '^.*\\.js$': 'babel-jest'
  }
}
