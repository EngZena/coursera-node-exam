import config from "config";
import morgan from "morgan";
import express from "express";
import AppError from './utils/appError';
import bookRouter from './routes/booksRoutes';
import userRouter from './routes/userRoutes';
import reviewRouter from './routes/reviewRoutes';
import searchRoutes from './routes/searchRoutes';

const app = express();
/**
 * morgan is a Node.js and Express middleware to log HTTP requests and errors, and simplifies the process
 */
if (config.get("NODE_ENV") === "development") {
  app.use(morgan("dev"));
}

/**
 * parse application/json, basically parse incoming Request Object as a JSON Object 
 */
app.use(express.json({ limit: '50mb' }));

app.use('/api/library/v1/users', userRouter);
app.use('/api/library/v1/books', bookRouter);
app.use('/api/library/v1/reviews', reviewRouter);
app.use('/api/library/v1/search', searchRoutes);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});
module.exports = app; 
