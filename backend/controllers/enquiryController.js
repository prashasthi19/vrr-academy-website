import Enquiry from '../models/Enquiry.js'

export const createEnquiry = async (req, res) => {
  try {
    const { name, phone, class: studentClass, course, message } = req.body

    const enquiry = new Enquiry({
      name,
      phone,
      class: studentClass,
      course,
      message,
    })

    await enquiry.save()

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: enquiry,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting enquiry',
      error: error.message,
    })
  }
}

export const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      data: enquiries,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching enquiries',
      error: error.message,
    })
  }
}

export const getEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id)
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found',
      })
    }
    res.status(200).json({
      success: true,
      data: enquiry,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching enquiry',
      error: error.message,
    })
  }
}
