import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.academicSemesterValidationSchema),
  academicSemesterController.createAcademicSemester,
);

router.get('/', academicSemesterController.getAllAcademicSemester);

router.get(
  '/:semesterId',
  academicSemesterController.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    academicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterController.updateAcademicSemester,
);

export const academicSemesterRoute = router;
