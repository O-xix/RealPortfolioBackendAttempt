import './repoCard.css'; // Assuming you have some CSS for styling the card
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function RepoCard({ repo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/portfolio/repo/${repo.id}`, { state: repo }); // Navigate to the repo details page
  };

  // Function to truncate the description
  const truncateDescription = (text, maxLength) => {
    if (!text) return ''; // Handle cases where description is null or undefined
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="repo-card" onClick={handleClick}>
      <h2>{repo.name}</h2>
      <h3>{repo.language}</h3>
      <p>{truncateDescription(repo.description, 100)}</p> {/* Truncate to 100 characters */}
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

export default RepoCard;