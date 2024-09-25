const winston = require("winston");
const { combine, timestamp, printf, colorize } = winston.format;
require("winston-daily-rotate-file");

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: "logs/combined-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxFiles: "14d",
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    printf(
      ({ timestamp, level, message }) => `[${timestamp}]:[${level}] ${message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/combined.log" }),
    new winston.transports.File({
      filename: "logs/errors.log",
      level: "error",
    }),
    fileRotateTransport,
  ],

  exceptionHandlers: [
    new winston.transports.File({ filename: "logs/exceptions.log" }),
  ],

  rejectionHandlers: [
    new winston.transports.File({ filename: "logs/rejections.log" }),
  ],
});

// Optional: Add file transport if needed
// logger.add();

module.exports = logger;
