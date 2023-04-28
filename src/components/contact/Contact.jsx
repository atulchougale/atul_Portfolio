import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rz4m7ly', 'template_4nfetjc', form.current, '2T7vvb7g5pPlAmh7r')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>atulchougale96@gmail.com</h5>
            <a href="mailto:atulchougale96@gmail.com" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>Atul Chougale</h5>
            <a href="https://m.me/atul.chougale.104" rel='noreferrer' target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+918308038343</h5>
            <a href="https://api.whatsapp.com/send?phone+918308038343" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>atulchougale07</h5>
            <a href=" https://ig.me/m/atulchougale07" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact