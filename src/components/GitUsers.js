import React, {useState, useEffect} from 'react'

export default function GitUsers() {

    const[gitUsers, setGitUsers]=useState([]);

useEffect(()=>{
    fetch("https://api.github.com/users/tta2yta")
    .then(response=>response.json())
    .then(data=>{console.log(data); setGitUsers(data)});
},[])

    return (
        <div className="git-user">
            {console.log(gitUsers)}
            <form className="form">
                <label>Please Enter Github UserName</label><input type="text" value="" onChange="" />
            </form>
            {/* {gitUsers.map(item=>{ */}
                <div className="gituser-list">
                <img src={gitUsers.avatar_url} wrapped ui={false}/><br/>
                <label>Name: </label>{gitUsers.name}<br/>
                <label>Github UserName: </label>{gitUsers.login}<br/>
                <label>Github URL: </label>{gitUsers.html_url}<br/>
                <label>Puplic Repostories: </label>{gitUsers.public_repos}<br/>
            </div>
            {/* })} */}
            
        </div>
    )
}
