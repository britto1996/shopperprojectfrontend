import React from 'react'
import '../styles.css'
import {API} from '../backend'
import Base from './Base'

function Home() {
    console.log("API Is",API)
    return (
       
        <div>
        <Base title="HomePage" 
        description="Don't try to control my vision">
        
        </Base>  
        </div>
        
    )
    
}

export default Home
