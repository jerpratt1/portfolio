import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zxnt6r8', 'template_bftqtx8', form.current, 'CV5TWJRz-RCMoD8mK')
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail} id="email_form">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailForm;


