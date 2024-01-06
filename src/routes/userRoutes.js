import express from 'express';

import * as authController from '../controllers/authController';

const router = express.Router();

// Task 6: Register New user – 3 Points
router.post('/signUp', authController.signUp);

// Task 7: Login as a Registered user - 3 Points
router.post('/login', authController.login);

router.post('/logout', authController.logout);

export default router;
