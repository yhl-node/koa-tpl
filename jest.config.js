module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  testMatch: [
    '**/test/**/*.js'
  ],
  transform: {
    '^.*\\.js$': 'babel-jest'
  }
}
