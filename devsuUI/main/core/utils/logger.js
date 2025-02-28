const pino = require('pino');
const fs = require('fs');

const today = new Date();
const fileNameLog = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
const logFileStream = fs.createWriteStream(`./reports/${fileNameLog}.log`, { flags: 'a' });

module.exports = pino({
  level: 'debug',
  transport: {
    targets: [
      {
        target: 'pino-pretty',
        level: 'trace',
        options: {
          colorize: true,
          translateTime: 'SYS:dd-mm-yyyy HH:MM:ss'
        }
      },
      {
        target: 'pino/file',
        level: 'trace',
        options: {
          destination: `./reports/${fileNameLog}.log`,
          mkdir: true
        }
      }
    ]
  }
}, logFileStream);