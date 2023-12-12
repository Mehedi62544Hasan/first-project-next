import { z } from 'zod';

const nameValidationSchema = z.object({
  firstName: z.string({
    required_error: 'firstName is required',
  }),
  lastName: z.string({
    required_error: 'lastName is required',
  }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string({
    required_error: 'fatherName is required',
  }),
  motherName: z.string({
    required_error: 'motherName is required',
  }),
  contact: z.number({
    required_error: 'contact is required',
  }),
});

const presentAddressValidationSchema = z.object({
  country: z.string({
    required_error: 'country is required',
  }),
  district: z.string({
    required_error: 'district is required',
  }),
  village: z.string({
    required_error: 'village is required',
  }),
  road: z.number().optional(),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      id: z.string({
        required_error: 'studentId is required',
      }),
      name: nameValidationSchema,
      email: z.string({
        required_error: 'email is required',
      }),
      gender: z.enum(['male', 'female']),
      doJob: z.boolean(),
      contact: z.number({
        required_error: 'contact is required',
      }),
      guardian: guardianValidationSchema,
      presentAddress: presentAddressValidationSchema,
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

// .................Update..................//

const updateNameValidationSchema = z.object({
  firstName: z.string({
    required_error: 'firstName is required',
  }).optional(),
  lastName: z.string({
    required_error: 'lastName is required',
  }).optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string({
    required_error: 'fatherName is required',
  }).optional(),
  motherName: z.string({
    required_error: 'motherName is required',
  }).optional(),
  contact: z.number({
    required_error: 'contact is required',
  }).optional(),
});

const updatePresentAddressValidationSchema = z.object({
  country: z.string({
    required_error: 'country is required',
  }).optional(),
  district: z.string({
    required_error: 'district is required',
  }).optional(),
  village: z.string({
    required_error: 'village is required',
  }).optional(),
  road: z.number().optional(),
});

const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      id: z.string({
      }).optional(),
      name: updateNameValidationSchema,
      email: z.string({
      }).optional(),
      gender: z.enum(['male', 'female']).optional(),
      doJob: z.boolean().optional(),
      contact: z.number({
        required_error: 'contact is required',
      }).optional(),
      guardian: updateGuardianValidationSchema,
      presentAddress: updatePresentAddressValidationSchema,
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});




export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema
};
