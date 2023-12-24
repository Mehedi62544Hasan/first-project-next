import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { LoginValidation } from './auth.validation';
import { AuthController } from './auth.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.use(
  '/login',
  validateRequest(LoginValidation.loginValidationSchema),
  AuthController.loginUser,
);

router.use(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
  validateRequest(LoginValidation.changePasswordValidationSchema),
  AuthController.changePassword,
);

export const AuthRoutes = router;
