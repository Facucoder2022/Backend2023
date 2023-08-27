const winston = require('winston');

const customLevelOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 5,
        debug: 4
    },
    colors: {
        fatal: 'red',
        error: 'red',
        warning: 'yellow',
        info: 'blue',
        http: 'green',
        debug: 'white' 
    }
}

const logger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize({colors: customLevelOptions.colors}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './errors.log',
            level: 'warning',
            format: winston.format.simple()
        })
    ]
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }));
  }

module.exports = logger;
