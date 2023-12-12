import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyValidation } from './academicFaculty.validation';
import { academicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidation.academicFacultyValidationSchema),
  academicFacultyController.createAcademicFaculty,
);

router.get('/', academicFacultyController.getAllAcademicFaculty);

router.get('/:_id', academicFacultyController.getSingleAcademicSemester);

router.patch(
  '/:_id',
  validateRequest(
    academicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  academicFacultyController.updateAcademicFaculty,
);

export const academicFacultyRoute = router;
