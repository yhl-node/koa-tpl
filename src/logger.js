import winston from 'winston'
import fs from 'fs'
import path from 'path'

const logDir = 'logs'
const { combine, timestamp } = winston.format
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error'
    }),
    new winston.transports.File({ filename: path.join(logDir, 'combined.log') })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console())
}

export default logger
