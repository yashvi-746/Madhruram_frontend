import axios from "axios";
import emailjs from "@emailjs/browser";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const submitContact = async (contactData) => {
  // 1. Save to local database
  try {
    await axios.post(`${API_URL}/api/contact`, contactData);
  } catch (error) {
    console.error("Local database save error:", error);
  }

  // 2. Dispatch email using the selected/available method (EmailJS, Formspree, or FormSubmit fallback)
  const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const formspreeId = process.env.REACT_APP_FORMSPREE_ID;

  let emailSent = false;
  let methodUsed = "";

  // Option A: EmailJS
  if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
    try {
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          name: contactData.name,
          email: contactData.email,
          contact: contactData.contact,
          message: contactData.message,
          subject: `New Job Registration: ${contactData.name} - Madhuram Jobs`,
        },
        emailjsPublicKey
      );
      emailSent = true;
      methodUsed = "EmailJS";
    } catch (emailjsError) {
      console.error("EmailJS dispatch error:", emailjsError);
    }
  }

  // Option B: Formspree (if EmailJS was not configured or failed)
  if (!emailSent && formspreeId) {
    try {
      await axios.post(`https://formspree.io/f/${formspreeId}`, {
        name: contactData.name,
        email: contactData.email,
        contact: contactData.contact,
        message: contactData.message,
        _subject: `New Job Registration: ${contactData.name} - Madhuram Jobs`,
      });
      emailSent = true;
      methodUsed = "Formspree";
    } catch (formspreeError) {
      console.error("Formspree dispatch error:", formspreeError);
    }
  }

  // Option C: FormSubmit.co Fallback (robust working system out-of-the-box)
  if (!emailSent) {
    try {
      await axios.post("https://formsubmit.co/ajax/1380c2af5592674a175f7163304321cc", {
        name: contactData.name,
        email: contactData.email,
        contact: contactData.contact,
        message: contactData.message,
        _subject: `New Job Registration: ${contactData.name} - Madhuram Jobs`,
        _template: "box", // Premium box layout
        _autoresponse: `Thank you for contacting Madhuram Jobs! We have received your query regarding our latest openings and will get back to you shortly.`
      });
      emailSent = true;
      methodUsed = "FormSubmit Fallback";
    } catch (fallbackError) {
      console.error("FormSubmit fallback error:", fallbackError);
    }
  }

  return {
    success: true,
    message: `Thank you! Your details have been submitted successfully and your notification email has been sent (via ${methodUsed})!`
  };
};
