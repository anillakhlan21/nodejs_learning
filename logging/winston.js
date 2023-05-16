const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'logs/app.log'})
    ]
})

logger.warn('This is a warning message');
logger.error('This is a error message');
logger.info('This is an info message');

// Example with custom log levels and formatting
logger.log({
    level: 'debug',
    message: 'This is a debug message',
    customProperty: 'custom value'
  });
