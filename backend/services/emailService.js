const sendEmail = async (to, subject, text) => {
  try {
    console.log("📧 Email disabled mode");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Text:", text);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = sendEmail;
