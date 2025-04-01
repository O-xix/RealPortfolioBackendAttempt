

function repoCard({ repo }) {
  return (
    <div className="repo-card">
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}