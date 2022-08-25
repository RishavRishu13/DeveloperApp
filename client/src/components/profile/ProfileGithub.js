import React, { useEffect, useState } from 'react'
import Repos from '../common/Repos'
import './ProfileGithub.css'
import axios from 'axios'

const ProfileGithub = (props) =>{
    const [repos, setRepos] = useState([])
    const clientId = "31d64130efcb45fcc8bc"
    const clientSecret = "a68badb083dd937b2756a2431eb8a197d9296683"
    const count = 20
    const sort = "created: asc"

    useEffect(() => {
        const url = `https://api.github.com/users/${props.profile.github}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
        const fetchData = async () => {
            try {
                const res = await axios.get(url, {'Accept': 'application/vnd.github.v3+json'})
                setRepos(res.data)
            }catch(err) {
                console.log(err)
            }
        }
        fetchData()
    }, [repos])
    const repoItems = repos.length === 0 ? <Repos/> : <div className="repoContainer">
    <div className="header">Github Repositories</div>
    {repos.map((repo) => {
    return(
        <div key={repo.id} className="githubCard">
            <div className="title">
                <a style={{textDecoration:"none"}} href={repo.html_url} target="_blank">{repo.name}</a>
            </div>
            <div className="action">
                <div className="star">
                    <img style={{color:"white"}} src="../images/star.svg" alt="" />
                    <p>{repo.stargazers_count}</p>
                </div>
                <div className="watch">
                    <img style={{color:"white"}} src="../images/eye.svg" alt="" />
                    <p>{repo.watchers_count}</p>
                </div>
                <div className="fork">
                    <img style={{color:"white"}} src="../images/github.svg" alt="" />
                    <p>{repo.forks_count}</p>
                </div>
            </div>
        </div>
    )
})}
</div>
    



    return (
        <div>
            {repoItems}
        </div>
        
    )
}

export default ProfileGithub