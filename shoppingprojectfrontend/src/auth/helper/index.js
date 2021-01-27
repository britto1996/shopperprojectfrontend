import {API} from '../../backend'

export const signup = user => {
    let signupData = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(user)
    }
     return fetch(`${API}/signup`,signupData)
            .then(response => response.json())
            .catch(err=>console.log(err))

}

export const signin = user => {
    let signinData = {
        method:'POST',
        headers:{
             Accept:'application/json',
            'Content-Type':'application/json'},
        body:JSON.stringify(user)
    }
     return fetch(`${API}/signin`,signinData)
            .then(response=>response.json())
            .catch(err=>console.log(err))
}

export const authenticate = (data,next) => {
    if(typeof window!=='undefined'){
         localStorage.setItem("jwt",JSON.stringify(data))
         next()
    }
    
}

export const signout = next => {
    if(typeof window!=='undefined'){
         localStorage.removeItem("jwt")
         next()

        let signoutData = {
        method:'GET'
    }
    return fetch(`${API}/signout`,signoutData)
            .then(response=>console.log('user sign out successfully'))
            .catch(err=>console.log(err))


    }
    
    
}

export const isAuthenticated = () => {
    if(typeof window == 'undefined'){
        return false
    }
    if(localStorage.getItem("jwt")){
        JSON.parse(localStorage.getItem("jwt"))
    }else{
        return false
    }
}

