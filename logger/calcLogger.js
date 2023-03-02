 
const { createLogger, format, transports, config } = require('winston');
 
const calcLogger = createLogger({
   transports: [
       new transports.Console()
     ]
 });
 module.exports = calcLogger;