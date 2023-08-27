const { logger } = require("../config/configServer");

exports.addLogger = (req, res, next) => {
    req.logger = logger
    req.logger.info(`${req.method} en ${req.url} - ${new Date().toLocaleString()}`)
    next()
}