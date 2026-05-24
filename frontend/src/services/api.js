import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Enquiry API
export const submitEnquiry = async (enquiryData) => {
  try {
    const response = await apiClient.post('/enquiry', enquiryData)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

export const getEnquiries = async () => {
  try {
    const response = await apiClient.get('/enquiry')
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

export const getEnquiryById = async (id) => {
  try {
    const response = await apiClient.get(`/enquiry/${id}`)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

export default apiClient
