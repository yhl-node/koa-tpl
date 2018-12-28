const config = jest.genMockFromModule('config')

config.server.logDir = 'log-t'
config.server.wsKeepAlive = 500

export default config
