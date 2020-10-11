import React from "react";
import "../css/Contact.css";
import emailjs from 'emailjs-com';


const contacts = [
  { city: 'warszawa', name: 'agnieszka wis', phone: '91283982173', mail: 'agnieszka@ent-studio.pl' },
  { city: 'wrocław', name: 'jagoda hausmann', phone: '91283982173', mail: 'jagoda@ent-studio.pl' },
  { city: 'kalisz', name: 'krzysztof urbaniak', phone: '91283982173', mail: 'krzysztof@ent-studio.pl' },
]

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

  let contactsList = contacts.map(contact => {
    return (
      <div className='contact-container' key={contact.name}>
        <h1 className='city'>{contact.city}</h1>
        <h2>kontakt</h2>
        <p className='name'>{contact.name}</p>
        <p className='phone'> tel. {contact.phone}</p>
        <p className='mail'>{contact.mail}</p>

      </div>
    )
  })


  return <div className="contact-page" id='contact'>
    <h1 className='contact-page-title'>Kontakt mailowy</h1>
    <div className='form-parent'>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Twoje imie i nazwisko</label>
        <br />
        <input type="text" name="name" />
        <br />
        <label>Twój email</label>
        <br />
        <input type="email" name="email" />
        <br />
        <label>Twoja wiadomość</label>
        <br />
        <textarea name="message" />
        <br />
        <input type="submit" value="wyślij" />
      </form>
    </div>
    <div className='contacts-list'>
      {contactsList}
    </div>
  </div>;
};

export default Contact;
