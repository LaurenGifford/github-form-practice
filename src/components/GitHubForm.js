import { UsernameForm, Submit } from '../styles/formStyles'
import TextField from "./TextField"
import React, {useState} from 'react'

function GitHubForm({gitRepos, setGitRepos, username, setUsername}) {
    const [showError, setShowError] = useState(null)

    function sendUserName(e) {
        e.preventDefault()
        console.log(username)

        if (username.length > 0) {
            fetch(`https://api.github.com/users/${username}/repos?per_page=50`)
            .then(r => r.json())
            .then(data => {
                console.log(data)
                if (data.length > 0) {
                    setGitRepos(data)
                    setUsername(data[0].owner.login)
                } else {setShowError('No public repositories were found for that username!')}
            })
        } else {setShowError('Enter a username!')}
    }

    return (
        <div >
            <UsernameForm className='username-form'
                onSubmit={(e) => sendUserName(e)} >
                <TextField 
                username={username} 
                setUsername={setUsername} 
                showError={showError}
                setShowError={setShowError}
                />
                <Submit type="submit" value="Search" />
            </UsernameForm>
        </div>
    )
}

export default GitHubForm