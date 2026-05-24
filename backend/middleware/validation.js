import { validationResult, body } from 'express-validator'

const validateEnquiry = [
  body('name')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters'),
  body('phone')
    .trim()
    .matches(/^\d{10}$/)
    .withMessage('Phone must be a valid 10-digit number'),
  body('class')
    .isIn(['9', '10', '11', '12'])
    .withMessage('Invalid class selection'),
  body('course')
    .isIn(['Foundation', 'JEE', 'NEET'])
    .withMessage('Invalid course selection'),
  body('message')
    .trim()
    .isLength({ max: 500 })
    .withMessage('Message cannot exceed 500 characters'),
]

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

export { validateEnquiry, handleValidationErrors }
