import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);
  const { name, email, message } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
  
    // Perform validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields');
      return; // Prevent form submission if fields are not filled
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return; 
    }

    if (message.trim().length < 10) {
      toast.error('Message should be at least 10 characters long');
      return;
    }
  
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setSuccessMessageVisible(true); // Show success message

    // Reset form data after success message is displayed
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  useEffect(() => {
    // If successMessageVisible is true, show the success message for 3 seconds
    if (successMessageVisible) {
      setTimeout(() => {
        setSuccessMessageVisible(false);
      }, 3000);
    }
  }, [successMessageVisible]);

  return (
    <section id="contact" className="bg-blue-900 bg-opacity-10 py-5 mt-11">
      <ToastContainer /> {/* Toast container for displaying notifications */}
      <h1 className="section-header text-white text-center text-5xl font-semibold uppercase mb-8">Contact Us</h1>
      <div className="profile-card flex flex-col md:flex-row justify-between mx-auto max-w-3xl bg-black bg-opacity-40 rounded-lg shadow-lg p-8">

        <form id="contact-form" className="w-full md:w-1/2 mr-0 md:mr-8" onSubmit={onSubmit} role="form">
        <input 
  type="text" 
  className="input mb-4 w-full p-1" // Added w-full class to make the input full-width
  id="name" 
  placeholder="NAME" 
  name="name" 
  value={name} 
  onChange={onChange} 
  onFocus={() => setNameFocused(true)} 
  onBlur={() => setNameFocused(false)} 
  required 
/>
<input 
  type="email" 
  className="input mb-4 w-full p-1 rounded" // Added w-full class to make the input full-width
  id="email" 
  placeholder="EMAIL" 
  name="email" 
  value={email} 
  onChange={onChange} 
  onFocus={() => setEmailFocused(true)} 
  onBlur={() => setEmailFocused(false)} 
  required 
/>
<textarea 
  className="textarea mb-4 w-full" // Added w-full class to make the textarea full-width
  rows="10" 
  placeholder="MESSAGE" 
  name="message" 
  value={message} 
  onChange={onChange} 
  onFocus={() => setMessageFocused(true)} 
  onBlur={() => setMessageFocused(false)} 
  required 
></textarea>

          <button 
      className="btn btn-primary w-full text-white font-bold " 
      type="submit"
    >
      SEND
    </button>
        </form>
        <div className={`direct-contact-container max-w-md mx-auto md:ml-8 mt-8 md:mt-0 ${submitted ? 'ml-auto' : ''}`}>
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faMapMarker} size="xl" className="text-white mr-6 mt-10" />
              <span className="contact-icon text-white font-bold mr-2 place">
                <a href="https://www.google.co.in/maps/place/Koundampalayam,+Coimbatore,+Tamil+Nadu/@11.0453163,76.9317303,15z/data=!3m1!4b1!4m6!3m5!1s0x3ba85897648df841:0x80b7ba5192d1b3c1!8m2!3d11.046293!4d76.9471079!16zL20vMGY0eHdx?entry=ttu" target="_blank">Know Our Location</a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} size="xl" className="text-white mr-6 mt-10" />
              <span className="contact-text phone mr"><a className="text-white font-bold">+91 9810174610</a></span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} size="xl" className="text-white mr-6 mt-10" />
              <span className="contact-text gmail"><a href="mailto:#" title="Send me an email" className="text-white font-bold">touristshelpline@gmail.com</a></span>
            </li>
          </ul>
          <hr className="border-white mt-8" />
          <ul className="social-media-list flex justify-center items-center mt-4">
            <li><a href="https://github.com/Sajithrajan03/Seek-Snap-V1.git" target="_blank" className="contact-icon text-white mr-4 text-xl"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://twitter.com/TNTravelNews" target="_blank" className="contact-icon text-white mr-4 text-xl"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.instagram.com/tntourismoffcl/" target="_blank" className="contact-icon text-white mr-4 text-xl"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
          <hr className="border-white mt-3" />
          <div className="copyright text-center text-blue-600 font-bold mt-1">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
      {successMessageVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="bg-black bg-opacity-25 absolute inset-0 backdrop-filter backdrop-blur-lg"></div> 
          <div className="bg-transparent rounded-lg p-6 shadow-none relative z-10">
            <p className="text-3xl text-center text-blue-500 font-bold bg-white p-4 rounded-xl">
              Thank you for reaching out. We&apos;ll be in contact shortly!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
