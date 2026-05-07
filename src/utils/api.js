import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const submitContact = async (contactData) => {
  const formspreeId = process.env.REACT_APP_FORMSPREE_ID;
  if (formspreeId) {
    try {
      await axios.post(`https://formspree.io/f/${formspreeId}`, contactData);
      return { message: "Thank you! Your message was sent successfully via Formspree." };
    } catch (error) {
      throw new Error(error.response?.data?.error || "Formspree submission failed. Please check your Formspree ID.");
    }
  }

  try {
    const response = await axios.post(`${API_URL}/api/contact`, contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
