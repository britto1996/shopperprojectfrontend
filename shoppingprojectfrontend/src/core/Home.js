import React from 'react'
import '../styles.css'
import {API} from '../backend'
import Base from './Base'

function Home() {
    console.log("API Is",API)
    return (
       
        <div>
        <Base title="B COMMERCE" 
        description="Visionary have more problems">
        
        </Base>  
        </div>
        
    )
    
}

export default Home
