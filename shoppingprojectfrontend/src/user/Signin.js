import React, { useState } from 'react'
import {signin,authenticate,isAuthenticated} from '../auth/helper/index'
import Base from '../core/Base'
import { Link, Redirect } from 'react-router-dom';


const Signin = () => {


   

   
  

    const signInForm = () => {
    return <form>
        <div className="mb-3">
        <label className="form-label text-white">Email</label>
        <input value={email} onChange={handleChange("email")} type="email" className="form-control" />
        </div>

        <div className="mb-3">
        <label className="form-label text-white">Password</label>
        <input value={password} onChange={handleChange("password")} type="password" className="form-control" />
        </div>

        <div className="d-grid gap-2">
        <button onClick={onSubmit} className="btn btn-success btn-lg btn-block">sign in</button>
        </div>
    </form>
}

     const [values,setValues] = useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })

    const {email,password,error,loading,didRedirect} = values
    // const {user} = isAuthenticated()

     const handleChange = name => event => {
        setValues({...values,error:false,[name]:event.target.value})
    }


    const onSubmit = event => {
        event.preventDefault()
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data=>{
            if(data.error){
              setValues({...values,error:data.error,loading:false})  
            }else{
                authenticate(data,()=>{
                    setValues({
                        ...values,
                        didRedirect:true,

                    })
                })
            }
        })
        .catch(console.log("error in login"))
    }

    const performRedirect = () => {
        if(didRedirect){
            if(user && user.role === 1){
                return <p>redirect to admin</p>
            }else{
                return <p>redirect to user dashboard</p>
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/" />
        }
    }

      const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }

     const errorMessage = () => {
         
         <div className="alert alert-danger"
        
                style={{display:error?"":"none"}}>

                {error}
                
                {console.log(error)}
                
                </div>
    }



   

    return (
        <Base title="SignIn"
            description="Keep calm and choose best">
        {loadingMessage()}
        {errorMessage()}
        {signInForm()}
        {performRedirect()}
        </Base>
    )
}

export default Signin
