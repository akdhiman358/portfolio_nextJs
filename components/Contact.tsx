import React, { useState, useRef, useEffect, SyntheticEvent } from 'react';
import { motion } from 'framer-motion';
import Title from './Title';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const formRef =  useRef<HTMLFormElement>(null);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendEmail(); // Form submission logic (e.g., send data to server)
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
    // Clear form after submission (optional)
    setName('');
    setEmail('');
    setMessage('');
  };

  useEffect(() => {
    if (submitted) {
      const timeoutId = setTimeout(() => setSubmitted(false), 5000); // Timeout after 3 seconds
      return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount
    }
  }, [submitted]);

  const sendEmail = () => {
    if (formRef.current) { // Check if formRef.current is available before accessing it
      emailjs
        .sendForm('service_qwy2u9o', 'template_w2brlnr', formRef.current, {
          publicKey: 'm_2OASxWxxgEeDJPO',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    } else {
      console.error('Form element not yet available'); // Handle potential early access
    }
  };

  return (
    <div className="my-10">
      <Title text="Contact Me " className="flex flex-col items-center justify-center " />
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-4 px-5">
        <label htmlFor="name" className="text-white font-medium">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-700"
          required
        />
        <label htmlFor="email" className="text-white font-medium">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-700"
          required
        />
        <label htmlFor="message" className="text-white font-medium">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-700 h-24"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-medium focus:outline-none focus:ring-1 focus:ring-red-700"
        >
          Submit
        </button>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-green-500 font-medium mt-4"
          >
            Message Sent ✔️
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default Contact;
