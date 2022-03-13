import React from 'react'
import styles from './Contact.module.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const navigate = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x6k9mjw', 'template_ncefsty', form.current, 'JQFcqM-heYb88HV0Y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        navigate('/');
        // window.location.reload();
    };

    return (
        <form className={`${styles.form} flex`} ref={form}>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' placeholder='Name' name='name' />
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' placeholder='Email' name='email' />
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' />
            <button type='submit' className='btn' onClick={sendEmail}>Submit</button>
        </form>
    )
}

export default Contact