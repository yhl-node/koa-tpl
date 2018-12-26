module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test/'],
  collectCoverage: true,
  testMatch: [
    '**/test/**/*.test.js'
  ],
  transform: {
    '^.*\\.js$': 'babel-jest'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!<rootDir>/node_modules/'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: -50
    }
  }
}
