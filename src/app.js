import config from "config";
import morgan from "morgan";
import express from "express";

const app = express();
/**
 * morgan is a Node.js and Express middleware to log HTTP requests and errors, and simplifies the process
 */
if (config.get("NODE_ENV") === "development") {
  app.use(morgan("dev"));
}

module.exports = app; 
