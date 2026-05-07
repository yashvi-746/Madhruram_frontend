import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const submitContact = async (contactData) => {
  try {
    const response = await axios.post(`${API_URL}/api/contact`, contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
