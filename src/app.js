import config from "config";
import morgan from "morgan";
import express from "express";
import AppError from './utils/appError';

const app = express();
/**
 * morgan is a Node.js and Express middleware to log HTTP requests and errors, and simplifies the process
 */
if (config.get("NODE_ENV") === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: '50mb' }));

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});
module.exports = app; 
