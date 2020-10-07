import React from "react";
import "../css/Contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_m8470jn', e.target, 'user_9WEeRiQq8RpRguMGmYdGY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }


  return <div className="contact-page" id='contact'>
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  </div>;
};

export default Contact;
