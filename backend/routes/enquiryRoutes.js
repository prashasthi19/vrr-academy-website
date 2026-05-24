import express from 'express'
import { createEnquiry, getAllEnquiries, getEnquiryById, updateEnquiry, deleteEnquiry } from '../controllers/enquiryController.js'
import { validateEnquiry, handleValidationErrors } from '../middleware/validation.js'

const router = express.Router()

// POST - Create new enquiry
router.post('/', validateEnquiry, handleValidationErrors, createEnquiry)

// GET - Get all enquiries with filters
router.get('/', getAllEnquiries)

// GET - Get enquiry by ID
router.get('/:id', getEnquiryById)

// PUT - Update enquiry status
router.put('/:id', updateEnquiry)

// DELETE - Delete enquiry
router.delete('/:id', deleteEnquiry)

export default router
