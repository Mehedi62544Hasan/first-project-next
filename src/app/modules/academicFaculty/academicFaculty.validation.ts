import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});

const updateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  }),
});

export const academicFacultyValidation = {
  academicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
