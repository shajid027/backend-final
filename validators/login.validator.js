const { z } = require('zod');

// creating an object schema

const loginSchema = z.object({
  email: z
    .email({ message: 'Invalid email address' })
    .min(3, { message: 'Email must be at least 3 characters' })
    .max(255, { message: 'Email must not be more than 255 characters' }),

  password: z
    .string({ require_error: 'Password is required' })
    .trim()
    .min(7, { message: 'Password must be at least of 6 chars' })
    .max(24, { message: 'Password must not be more than 24 characters' }),
});

module.exports = loginSchema;
