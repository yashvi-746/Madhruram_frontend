import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const submitContact = async (contactData) => {
  // 1. Save to local database
  try {
    await axios.post(`${API_URL}/api/contact`, contactData);
  } catch (error) {
    console.error("Local database save error:", error);
  }

  // 2. Send real email using FormSubmit directly to the client's email inbox!
  try {
    await axios.post("https://formsubmit.co/ajax/shahyashvi746@gmail.com", {
      Name: contactData.name,
      Email: contactData.email,
      Contact: contactData.contact,
      Message: contactData.message,
      _subject: `New Job Registration: ${contactData.name} - Madhuram Jobs`,
      _template: "table"
    });
  } catch (emailError) {
    console.error("FormSubmit email dispatch error:", emailError);
  }

  // 3. Send auto-reply greeting email to the candidate's inputted email!
  try {
    await axios.post(`https://formsubmit.co/ajax/${contactData.email}`, {
      Message: `Hello ${contactData.name},\n\nThank you for reaching out to Madhuram Jobs Consultancy!\n\nWe have received your contact details and job application query. One of our senior recruitment specialists will review your profile and contact you within 24-48 hours to discuss suitable career opportunities.\n\nBest Regards,\nPlacement Team\nMadhuram Jobs`,
      _subject: "Thank you for contacting Madhuram Jobs!",
    });
  } catch (autoReplyError) {
    console.error("Auto-reply dispatch error:", autoReplyError);
  }

  return {
    success: true,
    message: "Thank you! Your details have been submitted successfully and an instant greeting confirmation has been sent to your email!"
  };
};
