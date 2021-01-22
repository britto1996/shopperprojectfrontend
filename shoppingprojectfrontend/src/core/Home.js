import React from 'react'
import '../styles.css'
import {API} from '../backend'

function Home() {
    console.log("API Is",API)
    return (
       
        <div>
            <h1 className="text-white">The front end is {API}</h1>
            
        </div>
        
    )
    
}

export default Home
