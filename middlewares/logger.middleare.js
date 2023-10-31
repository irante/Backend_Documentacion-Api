//middleware que loggea todos los request http que van hacia el server.js

const logger = require('../logger')

const fn = (req, _res, next) => {
  logger.http(`[${req.method}] - ${req.url} at ${(new Date()).toISOString()}`)
  next()
}

module.exports = fn