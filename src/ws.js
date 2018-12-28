import WebSocket from 'ws'

function heartbeat () {
  this.isAlive = true
}

function start (server) {
  const wss = new WebSocket.Server({ server })
  wss.on('connection', (ws, req) => {
    ws.isAlive = true
    ws.on('pong', heartbeat)
    ws.on('message', (message) => {
      console.log('received: %s', message)
    })
    ws.send('connected')
  })

  setInterval(() => {
    wss.clients.forEach(function each (ws) {
      if (ws.isAlive === false) return ws.terminate()
      ws.isAlive = false
      ws.ping('', false, true)
    })
  }, 20000)
  return wss
}

export default {
  start
}
