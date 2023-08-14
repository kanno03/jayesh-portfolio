const contactForm = document.querySelector(".contact-form");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email_address']");
const messageInput = document.querySelector("textarea[name='message']");
const submitButton = document.querySelector("button[type='submit']");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all of the fields.");
    return;
  }

  const mailOptions = {
    to: "jkkikani2003@gmail.com",
    subject: "Contact Form Submission",
    text: `
      From: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  window.mailto(mailOptions);
});