import express from 'express'
import { createEnquiry, getAllEnquiries, getEnquiryById } from '../controllers/enquiryController.js'
import { validateEnquiry, handleValidationErrors } from '../middleware/validation.js'

const router = express.Router()

// POST - Create new enquiry
router.post('/', validateEnquiry, handleValidationErrors, createEnquiry)

// GET - Get all enquiries
router.get('/', getAllEnquiries)

// GET - Get enquiry by ID
router.get('/:id', getEnquiryById)

export default router
