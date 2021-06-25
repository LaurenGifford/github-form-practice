import './App.css';
import React, {useState} from 'react'
import GitHubForm from './components/GitHubForm';
import RepoCont from './components/RepoCont'

function App() {
  const [gitRepos, setGitRepos] = useState([])
  const [username, setUsername] = useState('')

  return (
    <div className='app'>
      {gitRepos.length === 0 ? <>
        <h2> Enter your GitHub username to access your repositories! </h2>
        <GitHubForm 
          username={username} 
          setUsername={setUsername} 
          gitRepos={gitRepos} 
          setGitRepos={setGitRepos}
        />
      </> : <> 
        <h2> {username}'s Github repositories </h2>
        <RepoCont 
          repos={gitRepos}
          gitRepos={gitRepos} 
          setGitRepos={setGitRepos}
        />
      </>}
    </div>
  );
}

export default App;
