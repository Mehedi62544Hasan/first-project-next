import express from 'express';
import { studentController } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from './student.validation';

const router = express.Router();

router.get('/', studentController.getAllStudentController);
router.get('/:studentId', studentController.getStudentController);
router.patch(
  '/:studentId',
  validateRequest(studentValidations.updateStudentValidationSchema),
  studentController.updateStudent,
);
router.delete('/:studentId', studentController.deleteStudent);

export const studentRoute = router;
