import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import enquiryRoutes from './routes/enquiryRoutes.js'
import { logger } from './utils/logger.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Trust proxy - important for production
app.set('trust proxy', 1)

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400 // 24 hours
}))

// Body parsing with size limits
app.use(bodyParser.json({ limit: '10kb' }))
app.use(bodyParser.urlencoded({ limit: '10kb', extended: true }))

// Request logging middleware
app.use((req, res, next) => {
  const startTime = Date.now()
  res.on('finish', () => {
    const duration = Date.now() - startTime
    logger.info(`${req.method} ${req.path}`, { 
      status: res.statusCode, 
      duration: `${duration}ms`,
      ip: req.ip 
    })
  })
  next()
})

// Connect to MongoDB
connectDB()

// API Routes
app.use('/api/enquiry', enquiryRoutes)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime()
  })
})

// Status endpoint for monitoring
app.get('/api/status', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'VRR Academy API',
    version: '1.0.0'
  })
})

// 404 handler
app.use((req, res) => {
  logger.warn('404 Not Found', { path: req.path, method: req.method })
  res.status(404).json({ 
    success: false,
    error: 'Route not found',
    path: req.path
  })
})

// Error handler - must be last
app.use((err, req, res, next) => {
  logger.error('Server error', err.message)
  
  const statusCode = err.statusCode || 500
  const message = process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  
  res.status(statusCode).json({ 
    success: false,
    error: 'Internal server error',
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
})

// Graceful shutdown
const server = app.listen(PORT, () => {
  logger.info(`🚀 Server is running on http://localhost:${PORT}`)
  logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`)
})

// Handle graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    logger.info('HTTP server closed')
    process.exit(0)
  })
})

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server')
  server.close(() => {
    logger.info('HTTP server closed')
    process.exit(0)
  })
})

export default app
