import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa'; // Importing an arrow-up icon from React Icons
import './scrollToTop.css'

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine whether to show or hide the button based on the scroll position
      setShowButton(window.scrollY > 200); // Adjust the threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${showButton ? 'show' : ''}` }
      onClick={scrollToTop}
      style={{ display: showButton ? 'flex' : 'none' }}
    >
      <FaArrowCircleUp className='align-center' />
    </button>
  );
}

export default ScrollToTop;