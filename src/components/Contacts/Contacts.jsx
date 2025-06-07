import React, { useContext, useState } from 'react';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaBloggerB,
  FaRedditAlien,
  FaStackOverflow,
  FaCodepen,
  FaInstagram,
  FaGitlab,
  FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
  const { theme } = useContext(ThemeContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  // Simple email validation function
  const isEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleContactForm = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrMsg('Please fill all the fields.');
      setSuccess(false);
      return;
    }

    if (!isEmail(email)) {
      setErrMsg('Invalid email address.');
      setSuccess(false);
      return;
    }

    axios
      .post(contactsData.sheetAPI, { name, email, message })
      .then(() => {
        setSuccess(true);
        setErrMsg('');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        setErrMsg('Failed to send message. Please try again.');
        setSuccess(false);
      });
  };

  // Styles as inline objects
  const inputStyle = {
    border: `4px solid ${theme.primary80}`,
    backgroundColor: theme.secondary,
    color: theme.tertiary,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 500,
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '15px',
    borderRadius: '5px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: theme.primary,
    fontWeight: 600,
    fontSize: '0.9rem',
  };

  const buttonStyle = {
    backgroundColor: theme.primary,
    color: theme.secondary,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'transform 0.2s ease-in-out',
  };

  const buttonHoverStyle = {
    transform: 'scale(1.05)',
  };

  const socialIconStyle = {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '21px',
    backgroundColor: theme.primary,
    color: theme.secondary,
    margin: '0 8px 8px 0',
    cursor: 'pointer',
    transition: 'transform 0.25s ease-in-out',
  };

  const detailsIconStyle = {
    ...socialIconStyle,
    fontSize: '23px',
    marginRight: '15px',
  };

  return (
  <div className="contacts" id="contacts" style={{ backgroundColor: theme.secondary }}>
    <div className="contacts--container" style={{ padding: '1.5rem', textAlign: 'center', width: '100%' }}>
      <div className="contacts-summary" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '1.5rem',
        color: theme.tertiary,
        fontSize: '1rem',
        fontWeight: 500 
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FiAtSign style={{ marginRight: '8px', fontSize: '18px' }} />
          <span>{contactsData.email}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FiPhone style={{ marginRight: '8px', fontSize: '18px' }} />
          <span>{contactsData.phone}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <HiOutlineLocationMarker style={{ marginRight: '8px', fontSize: '18px' }} />
          <span>{contactsData.address}</span>
        </div>
      </div>
    </div>
  </div>
);

}

export default Contacts;
