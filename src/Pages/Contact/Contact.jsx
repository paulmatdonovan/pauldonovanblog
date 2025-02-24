import { React, useRef } from 'react'
import emailjs from '@emailjs/browser';
import image4 from '../../Assets/blogImage (4).png'
import './Contact.css'

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xd5jwmb', 'template_e1hndvt', form.current, {
                publicKey: 'iz2_wQsfCHNMulLAw',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <div className='contact-form'>
                <div className='form'>
                    <h4>If you have any suggestions for my writing, would like to buy a copy of my book or if you would like me to build your website, feel free to email me below.  </h4>

                    <form className="form-input" ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input className="form-btn" type="submit" value="Send" />
                    </form>     
                </div>

                <div className='form-page-img'>
                    <img src={image4} alt="" />
                </div>

            </div>
        </>

    );
}

export default Contact;
 
