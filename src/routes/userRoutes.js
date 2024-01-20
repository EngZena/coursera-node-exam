import express from 'express';

import * as authController from '../controllers/authController';

const router = express.Router();

// Task 6
router.post('/signUp', authController.signUp);

// Task 7
router.post('/login', authController.login);

router.post('/logout', authController.logout);

export default router;
