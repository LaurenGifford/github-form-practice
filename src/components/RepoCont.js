import RepoCard from './RepoCard'

function RepoCont({repos}) {

    const renderRepos = repos.map(repo => {
        return(
            <RepoCard 
                key={repo.id}
                repo={repo}
            />
        )
    })

    return (
        <div>
            {renderRepos}
        </div>
    )
}

export default RepoCont