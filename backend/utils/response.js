// API Response Helper for consistent response format
export const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  })
}

export const sendError = (res, error, message = 'Error', statusCode = 500) => {
  res.status(statusCode).json({
    success: false,
    message,
    error: error instanceof Error ? error.message : error,
    timestamp: new Date().toISOString(),
  })
}

export const sendValidationError = (res, errors) => {
  res.status(400).json({
    success: false,
    message: 'Validation failed',
    errors: errors.array(),
    timestamp: new Date().toISOString(),
  })
}
