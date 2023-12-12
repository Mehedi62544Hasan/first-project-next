import express from 'express';
import { academicDepartmentValidation } from './academicDepartment.validation';
import { academicDepartmentController } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(
    academicDepartmentValidation.academicDepartmentValidationSchema,
  ),
  academicDepartmentController.createAcademicDepartment,
);

router.get('/', academicDepartmentController.getAllAcademicDepartment);

router.get('/:_id', academicDepartmentController.getSingleAcademicSemester);

router.patch(
  '/:_id',
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  academicDepartmentController.updateAcademicDepartment,
);

export const academicDepartmentRoute = router;
