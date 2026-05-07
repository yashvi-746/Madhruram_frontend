import axios from "axios";
import emailjs from "@emailjs/browser";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const submitContact = async (contactData) => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  if (serviceId && templateId && publicKey) {
    try {
      // 1. Send contact details email to admin
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: contactData.name,
          from_email: contactData.email,
          contact_number: contactData.contact,
          message: contactData.message,
          reply_to: contactData.email,
        },
        publicKey
      );

      // 2. Send instant greetings auto-reply if auto-reply template is supplied
      const autoReplyTemplateId = process.env.REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID;
      if (autoReplyTemplateId) {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          {
            to_name: contactData.name,
            to_email: contactData.email,
          },
          publicKey
        );
      }

      return { 
        message: "Thank you! Your message was sent successfully and an instant greeting confirmation has been sent to your email." 
      };
    } catch (error) {
      throw new Error(error.text || "EmailJS submission failed. Please check your credentials.");
    }
  }

  // Fallback to Formspree if configured
  const formspreeId = process.env.REACT_APP_FORMSPREE_ID;
  if (formspreeId) {
    try {
      await axios.post(`https://formspree.io/f/${formspreeId}`, contactData);
      return { message: "Thank you! Your message was sent successfully via Formspree." };
    } catch (error) {
      throw new Error(error.response?.data?.error || "Formspree submission failed. Please check your Formspree ID.");
    }
  }

  // Fallback to local server API
  try {
    const response = await axios.post(`${API_URL}/api/contact`, contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
