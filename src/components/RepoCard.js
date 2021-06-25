import {
    RepoInfo, 
    OwnerDetails, 
    RepoDetails,
    RepoTitle,
    NameSpan,
    Text,
    DetailBreakdown,
    DetCont,
} from '../styles/cardStyles'
import { BiGitRepoForked, BiStar } from 'react-icons/bi'
import { GoIssueOpened } from 'react-icons/go'


function RepoCard({repo}) {
    const {name, description, forks, stargazers_count, owner, open_issues_count} = repo

    return (
        <RepoInfo>
            <OwnerDetails>
                <RepoTitle> {name} </RepoTitle>
                <NameSpan> by {owner.login} </NameSpan>
                <Text> {description} </Text>
            </OwnerDetails>
            <RepoDetails>
                <DetCont>
                    <BiGitRepoForked />
                    <DetailBreakdown> 
                        <strong style={{color: '#081F32'}} > {forks} </strong> fork{forks !== 1 && 's'} 
                    </DetailBreakdown>
                </DetCont>
                <DetCont>
                    <BiStar />
                    <DetailBreakdown> 
                        <strong style={{color: '#081F32'}} > {stargazers_count} </strong> star{stargazers_count !== 1 && 's'} 
                    </DetailBreakdown>
                </DetCont>
                <DetCont>
                    <GoIssueOpened />
                    <DetailBreakdown> 
                        <strong style={{color: '#081F32'}} > {open_issues_count} </strong> open issue{open_issues_count !== 1 && 's'} 
                    </DetailBreakdown>
                </DetCont>
            </RepoDetails>
        </RepoInfo>
    )
}

export default RepoCard