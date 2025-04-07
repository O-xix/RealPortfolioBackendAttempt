import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './cardModal.css'; // Import the CSS file

const CardModal = () => {
  const { id } = useParams(); // Get the repo ID from the route
  const { state: repo } = useLocation(); // Access the passed repo object
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/portfolio'); // Navigate back to the main list
  };

  if (!repo) {
    return <div>Loading...</div>; // Fallback in case repo isn't passed
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{repo.name}</h2>
        <p>{repo.description || 'No description provided.'}</p>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
        <button onClick={handleClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default CardModal;