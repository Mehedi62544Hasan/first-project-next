import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      required_error: 'password is required',
      invalid_type_error: 'password must be a string',
    })
    .max(20, { message: 'password more then 20 characters' }),
  needsPasswordChange: z.boolean().optional(),
});

export default userValidationSchema;
