import React, {useState, useEffect} from 'react'

export default function GitUsers() {

    const[gitUsers, setGitUsers]=useState([]);
   // const[gitUserSearch, setGitUserSearch]=useState('')
    const[gitusername, setGitUserName]=useState('')

    const handleGtUserName=(e)=>{
        setGitUserName(e.target.value)
    }

const handleFindGitUser=(e)=>{
//setGitUserName(e.target.value)
fetch(`https://api.github.com/users/${e.target.value}`)
    .then(response=>response.json())
    .then(data=>{console.log(data); setGitUsers(data)});
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
            <form className="form">
                <label>Please Enter Github UserName</label>
                <input type="text" name="username" id="username" value={gitusername} onChange={handleGtUserName} />
            </form>
            {/* {gitUsers.map(item=>{ */}
                <div className="gituser-list">
                <img src={gitUsers.avatar_url} wrapped ui={false}/><br/>
                <ul>
                <li> <label>Name: </label>{gitUsers.name}</li>
                <li> <label>Github UserName: </label> {gitUsers.login}</li>
                <li> <label>Puplic Repostories: </label>{gitUsers.html_url}</li>
                <li><label>Puplic Repostories: </label>{gitUsers.public_repos}</li>
            </ul>
            </div>
           
            {/* })} */}
            
        </div>
    )
}
