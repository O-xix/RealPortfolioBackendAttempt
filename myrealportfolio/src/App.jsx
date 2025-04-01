import './App.css'
import { use, useState } from 'react'
import { useEffect } from 'react'
import TrueMain from './components/trueMain.jsx'

function App() {

  console.log(import.meta.env.VITE_GITHUB_API_KEY);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/O-xix/repos', {
        headers: {
          'Authorization': `token ${import.meta.env.VITE_GITHUB_API_KEY}`
        }
      });
      const data = await response.json();
      data.forEach((repo) => {
        console.log(repo.full_name);
      }
      );
    }

    fetchData();
  }
  , []);



  return (
    <>
      <div className="App">
        <h1>My Real Portfolio</h1>
        <p>This is my real portfolio.</p>
      </div>
      
    </>
  )
}

export default App
