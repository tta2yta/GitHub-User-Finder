import React, {useState, useEffect} from 'react'

export default function GitUsers() {

useEffect(()=>{
    fetch("https://api.github.com/users/example")
    .then(response=>response.json)
    .then(data=>console.log(data))
})

    return (
        <div>
            
        </div>
    )
}
