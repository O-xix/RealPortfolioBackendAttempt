import RepoCard from './repoCard.jsx'
import { use, useState } from 'react'
import { useEffect } from 'react'

function RepoScreen() {
  const [repos, setRepos] = useState([]);

  console.log(import.meta.env.VITE_GITHUB_API_KEY);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/O-xix/repos', {
          headers: {
            'Authorization': `token ${import.meta.env.VITE_GITHUB_API_KEY}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <>
      <div className="repo-screen">
        <h1>Repo Screen</h1>
        <p>This is the repo screen.</p>
      </div>
      <div className="repo-card-container">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <RepoCard repo={repo} />
          ))
        ) : (
          <p>No repositories found.</p>
        )}
      </div>
  </>
  );
}

export default RepoScreen;