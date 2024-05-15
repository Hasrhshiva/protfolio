import React, { useRef, useState } from 'react'
import './contact.css';
import ClientImg1 from '../../assets/profile-img.png';
import Instagram from '../../assets/icons8-instagram-48.png';
import Facebook from '../../assets/icons8-facebook-48.png';
import Twitter from '../../assets/icons8-twitterx-50.png';
import Linkedin from '../../assets/icons8-linkedin-48.png';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
  const [refresh, setRefresh] = useState(false); // State to trigger re-render
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1zd02ru', 'template_7iqp5yi', form.current, {
        publicKey: 'yxH5Ry97UFO_yGosc',
      })
      .then(
        () => {
          toast.success('Email sent successfully!');
          setRefresh(!refresh);
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`);

        },
      );
  };

  return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>
                  My Clients
                </h1>
                <p className='clientDesc'>
                  This is demo content, own write your content i want to work with you
                </p>
                <div className='clientImgs'>
                  <img src={ClientImg1} className='clientImg' alt=""/>
                  <img src={ClientImg1} className='clientImg' alt=""/>
                  <img src={ClientImg1} className='clientImg' alt=""/>
                  <img src={ClientImg1} className='clientImg' alt=""/>
                </div>
            </div>
            <div id='contact'>
                  <h1 className='contactPageTitle'>Contact Me</h1>
                  <span className='contactDesc'>Please Fill out of gthis and send a email for me so good clients</span>
                  <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='Your Name' className='name' name="your_name" />
                    <input type='email' placeholder='Your Email' className='email' name="your_email" />
                    <textarea className='msg' placeholder='Your Message' rows="5" name="message" />
                    <button className='submitBtn'>Send Message</button>
                    <div className='links'>
                      <img src={Instagram} className='link' alt="instagram"/>
                      <img src={Facebook} className='link' alt="facebook"/>
                      <img src={Twitter} className='link' alt="twitter"/>
                      <img src={Linkedin} className='link' alt="linkedin"/>
                    </div>
                  </form>
                 
            </div>
        </section>
  )
}

export default Contact