import React from 'react';
import { useNavigate } from 'react-router-dom';
import './introVideoPage.css'; // Import the CSS file

const IntroPage = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate('/portfolio'); // Navigate to the portfolio page
  };

  return (
    <div className="intro-container">
      <div className="video-container">
        <iframe
          className="video-frame"
          src="https://www.youtube.com/embed/O8gmdBd1y-8?si=cnbNsVGdiDTipyTw?autoplay=1&mute=0"
          title="Introduction Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <button className="skip-button" onClick={handleSkip}>
        Skip
      </button>
    </div>
  );
};

export default IntroPage;