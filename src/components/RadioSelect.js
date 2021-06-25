function RadioSelect({repos, selectedRepo, setSelectedRepo}) {

    const renderRepos = repos.map(repo => {
        return(
            <div key={repo.id} >
            <input type="radio" 
                id={repo.name} 
                name={repo.name} 
                value={repo.url} 
                checked={repo.url === selectedRepo}
                onChange={(e) => setSelectedRepo(e.target.value)}
                />
                <label for={repo.name} >{repo.name} </label>
            </div>
        )
    })

    return (
        <div>
            <h5>Choose a repo</h5>
            {renderRepos}
        </div>
    )
}

export default RadioSelect