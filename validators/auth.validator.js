const { z } = require('zod');

// creating an object schema

const signupSchema = z.object({
  username: z
    .string({ require_error: 'Name is required' })
    .trim()
    .min(3, { message: 'Name must be at least of 3 chars' })
    .max(255, { message: 'Name must not be more than 255 characters' }),
  email: z
    .email({ message: 'Invalid email address' })
    .min(3, { message: 'Email must be at least 3 characters' })
    .max(255, { message: 'Email must not be more than 255 characters' }),

  phone: z
    .string({ require_error: 'Phone is required' })
    .trim()
    .min(10, { message: 'Phone must be at least of 10 chars' })
    .max(20, { message: 'Phone must not be more than 20 characters' }),
  password: z
    .string({ require_error: 'Password is required' })
    .trim()
    .min(7, { message: 'Password must be at least of 6 chars' })
    .max(24, { message: 'Password must not be more than 24 characters' }),
});

module.exports = signupSchema;
