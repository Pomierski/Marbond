const serverURL = "https://marbond.pl/mail/";

const sendEmail = async (name, email, subject, text) => {
  let obj = {
    mailData: {
      name: name,
      email: email,
      subject: subject,
      text: text,
    },
  };

  fetch(serverURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
};

export default sendEmail;
