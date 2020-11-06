import React, {useState, useEffect} from 'react'

export default function GitUsers() {

    const[gitUsers, setGitUsers]=useState([]);

useEffect(()=>{
    fetch("https://api.github.com/users/tta2yta")
    .then(response=>response.json())
    .then(data=>{console.log(data); setGitUsers(data)});
},[])

    return (
        <div>
            {console.log(gitUsers)}
            <form>
                <label>Please Enter Github UserName</label><input type="text" value="" onChange="" />
            </form>
            {/* {gitUsers.map(item=>{ */}
                <div className="">
                <image src={gitUsers.avatar_url}></image><br/>
                <label>Name: </label>{gitUsers.name}<br/>
                <label>Github UserName: </label>{gitUsers.login}<br/>
                <label>Github URL: </label>{gitUsers.html_url}<br/>
                <label>Puplic Repostories: </label>{gitUsers.public_repos}<br/>
            </div>
            {/* })} */}
            
        </div>
    )
}
