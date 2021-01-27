
import React, { useState } from 'react'
import Base from '../core/Base';
import {signup} from '../auth/helper/index'
import { Link } from 'react-router-dom';




const  Signup = () => {
 
    
    const signUpForm = () => {
    return <form>
        <div className="mb-3">
        <label className="form-label text-white">Name</label>
        <input value={name} onChange={handleChange("name")} type="text" className="form-control" />
        </div>

        <div className="mb-3">
        <label className="form-label text-white">Email</label>
        <input value={email} onChange={handleChange("email")} name="email" type="email" className="form-control" />
        </div>

        <div className="mb-3">
        <label className="form-label text-white">Password</label>
        <input value={password} onChange={handleChange("password")} name="password" type="password" className="form-control" />
        </div>

        <div className="d-grid gap-2">
        <button onClick={onSubmit} className="btn btn-success btn-lg btn-block">sign up</button>
        </div>
    </form>
    }

       const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    })

    const {name,email,password,error,success} = values

    const handleChange = name => event => {
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({...values,error:false})
        signup({name,email,password})
        .then(data=>{
            if(data.error){
                console.log('registration failed')
                setValues({...values,error:data.error,success:false})
                // console.log(error)
            }else{
                console.log('register successfully')
                setValues({
                    ...values,
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true
                })
            }
        })
        .catch(console.log("error when register"))
    }

     const successMessage = () => {
        return (<div className="alert alert-success"
        
                style={{display:success?"":"none"}}>
                
                user registered successfully
                <Link to="/signin">Sign in here</Link>
                </div>)
    }

     const errorMessage = () => {
         
         <div className="alert alert-danger"
        
                style={{display:error?"":"none"}}>

                {error}
                
                {console.log(error)}
                
                </div>
    }
   
    
    return (
        <Base title="SignUp"
            description="Your purchase list are waiting...">
        {successMessage()}
        {errorMessage()}
        {signUpForm()}
        
        </Base>
    )
    
}

export default Signup
