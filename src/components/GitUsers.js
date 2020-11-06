import React, {useState, useEffect} from 'react'

export default function GitUsers() {

    const[gitUsers, setGitUsers]=useState([]);
    const[userRepos, setUserRepos]=useState([])
   // const[gitUserSearch, setGitUserSearch]=useState('')
    const[gitusername, setGitUserName]=useState('')

    const handleGtUserName=(e)=>{
        setGitUserName(e.target.value)
    }

    const sortUserRepo=(data)=>{
        console.log(data.length)
        data.sort((a, b)=>{
            //console.log(a.created_at)
            if (a.created_at < b.created_at)
            return  1 
            else
            return -1
        })
        if(data. length >= 5)
        setUserRepos(data.slice(0, 5))
        else
        setUserRepos(data)

    }

const handleFindGitUser=(e)=>{
//setGitUserName(e.target.value)
fetch(`https://api.github.com/users/${e.target.value}`)
    .then(response=>response.json())
    .then(data=>{console.log(data); setGitUsers(data)});

    fetch("https://api.github.com/users/tta2yta/repos")
    .then(response=>response.json())
    .then(data=>{console.log(data); sortUserRepo(data) });
}




useEffect(()=>{
    fetch("https://api.github.com/users/tta2yta")
    .then(response=>response.json())
    .then(data=>{console.log(data); setGitUsers(data)});
},[])

useEffect(()=>{

document.getElementById("username").addEventListener("keyup", handleFindGitUser)

return()=>{
    document.getElementById("username").removeEventListener("keyup", handleFindGitUser)
}
})

    return (
        <div className="git-user">
            {console.log(gitUsers)}
            {console.log(userRepos)}
            <form className="form">
                <label>Please Enter Github UserName: </label>
                <input type="text" name="username" id="username" value={gitusername} onChange={handleGtUserName} />
            </form>
            {/* {gitUsers.map(item=>{ */}
                <div className="gituser-list">
                <img src={gitUsers.avatar_url} wrapped ui={false}/><br/>
                <ul>
                <li> <label>Name: </label>{gitUsers.name}</li>
                <li> <label>Github UserName: </label> {gitUsers.login}</li>
                <li> <label>Puplic Repostories Url: </label>{gitUsers.html_url}</li>
                <li><label>Puplic Repostories: </label>{gitUsers.public_repos}</li>
            </ul>
            <h2>Latest 5 User Repos</h2>
            {userRepos.map(item=>(
                <div className="user-repos">
                <h4>{item.name}</h4>
                <div className="repos-items">
                <span className="stars">Stars: {item.stargazers_count}</span>
                <span className="watches"> Watches: {item.watchers_count}</span>
                <span className="forks">Forks:{item.forks}</span>
                </div>
                
                {console.log(item)}
            </div>
            //     item.map(li=>{
            //     <div className="user-repos">
            //       <h4>Repo Name</h4>
            //       <span>Stars: 1</span>
            //       <span> Watches: 1</span>
            //       <span>Forks:1</span>
            //   </div>
            //     })

                  

            ))}
          
            </div>
           
            {/* })} */}
            
        </div>
    )
}
