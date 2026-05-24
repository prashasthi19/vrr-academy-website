import Enquiry from '../models/Enquiry.js'
import { sendSuccess, sendError, sendValidationError } from '../utils/response.js'
import { logger } from '../utils/logger.js'

export const createEnquiry = async (req, res) => {
  try {
    const { name, phone, class: studentClass, course, message } = req.body

    logger.info('Creating new enquiry', { name, phone, class: studentClass, course })

    const enquiry = new Enquiry({
      name,
      phone,
      class: studentClass,
      course,
      message,
    })

    await enquiry.save()
    logger.info('Enquiry created successfully', { id: enquiry._id })

    sendSuccess(res, enquiry, 'Enquiry submitted successfully', 201)
  } catch (error) {
    logger.error('Error creating enquiry', error.message)
    sendError(res, error, 'Error submitting enquiry', 500)
  }
}

export const getAllEnquiries = async (req, res) => {
  try {
    const { status, limit = 10, skip = 0 } = req.query
    
    let query = {}
    if (status) {
      query.status = status
    }

    logger.info('Fetching enquiries', { query, limit, skip })

    const enquiries = await Enquiry.find(query)
      .limit(parseInt(limit))
      .skip(parseInt(skip))
      .sort({ createdAt: -1 })

    const total = await Enquiry.countDocuments(query)

    sendSuccess(res, {
      enquiries,
      total,
      limit: parseInt(limit),
      skip: parseInt(skip),
    }, 'Enquiries fetched successfully')
  } catch (error) {
    logger.error('Error fetching enquiries', error.message)
    sendError(res, error, 'Error fetching enquiries', 500)
  }
}

export const getEnquiryById = async (req, res) => {
  try {
    const { id } = req.params
    logger.info('Fetching enquiry by ID', { id })

    const enquiry = await Enquiry.findById(id)
    if (!enquiry) {
      logger.warn('Enquiry not found', { id })
      return sendError(res, null, 'Enquiry not found', 404)
    }

    sendSuccess(res, enquiry, 'Enquiry fetched successfully')
  } catch (error) {
    logger.error('Error fetching enquiry', error.message)
    sendError(res, error, 'Error fetching enquiry', 500)
  }
}

export const updateEnquiry = async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body

    logger.info('Updating enquiry', { id, status })

    const enquiry = await Enquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    )

    if (!enquiry) {
      logger.warn('Enquiry not found', { id })
      return sendError(res, null, 'Enquiry not found', 404)
    }

    logger.info('Enquiry updated successfully', { id })
    sendSuccess(res, enquiry, 'Enquiry updated successfully')
  } catch (error) {
    logger.error('Error updating enquiry', error.message)
    sendError(res, error, 'Error updating enquiry', 500)
  }
}

export const deleteEnquiry = async (req, res) => {
  try {
    const { id } = req.params

    logger.info('Deleting enquiry', { id })

    const enquiry = await Enquiry.findByIdAndDelete(id)
    if (!enquiry) {
      logger.warn('Enquiry not found', { id })
      return sendError(res, null, 'Enquiry not found', 404)
    }

    logger.info('Enquiry deleted successfully', { id })
    sendSuccess(res, enquiry, 'Enquiry deleted successfully')
  } catch (error) {
    logger.error('Error deleting enquiry', error.message)
    sendError(res, error, 'Error deleting enquiry', 500)
  }
}
