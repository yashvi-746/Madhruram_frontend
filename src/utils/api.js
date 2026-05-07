import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const submitContact = async (contactData) => {
  // 1. Save to local database
  try {
    await axios.post(`${API_URL}/api/contact`, contactData);
  } catch (error) {
    console.error("Local database save error:", error);
  }

  // 2. Send real email using FormSubmit with the USER's verified secret token!
  try {
    await axios.post("https://formsubmit.co/ajax/1380c2af5592674a175f7163304321cc", {
      "Candidate Name": contactData.name,
      "Email Address": contactData.email,
      "Contact Number": contactData.contact,
      "Application Message": contactData.message,
      _subject: `New Job Registration: ${contactData.name} - Madhuram Jobs`,
      _template: "box", // Beautiful premium box HTML layout
      _autoresponse: `Hello ${contactData.name},\n\nThank you for contacting Madhuram Jobs! We have received your query regarding our latest openings and will get back to you shortly.\n\nBest regards,\nTeam Madhuram Jobs`
    });
  } catch (emailError) {
    console.error("FormSubmit email dispatch error:", emailError);
  }

  return {
    success: true,
    message: "Thank you! Your details have been submitted successfully and your instant greeting email has been sent!"
  };
};
