import WebSocket from 'ws'

function start (server) {
  const wss = new WebSocket.Server({ server })
  wss.on('connection', (ws, req) => {
    ws.on('message', (message) => {
      console.log('received: %s', message)
    })
    ws.send('connected')
  })
  return wss
}

export default {
  start
}
