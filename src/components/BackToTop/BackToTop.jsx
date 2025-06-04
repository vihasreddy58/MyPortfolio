import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { IoIosArrowDropupCircle } from 'react-icons/io'; // import the icon
import './BackToTop.css';

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      style={{ display: visible ? 'inline' : 'none' }}
      className='backToTop'
    >
      <button
        onClick={scrollToTop}
        aria-label='Back to top'
        style={{ fontSize: '3rem', color: theme.tertiary, background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <IoIosArrowDropupCircle />
      </button>
    </div>
  );
}

export default BackToTop;
