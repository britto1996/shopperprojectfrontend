import React from 'react'
import { Link , withRouter } from "react-router-dom";


const currentTab = (history,path) => {
    if(history.location.pathname === path){
        return {color:"#2ecc72"}
    }else{
        return {color:"#ffffff"}
    }
}

const Menu = ({history}) => (
    <div className="navbar nav-tabs navbar-expand-lg navbar-dark bg-dark">
        <div className="nav-item">
            <Link style={currentTab(history,"/")} className="nav-link" to="/">
            Home
            </Link>
            
        </div>

        <div className="nav-item">
            <Link style={currentTab(history,"/cart")} className="nav-link" to="/cart">
            Add Cart
            </Link>
            
        </div>
        <div className="nav-item bg-dark">
            <Link style={currentTab(history,"/cart")} className="nav-link" to="/user/dashboard">
            Dashboard
            </Link>
            
        </div>
        <div className="nav-item bg-dark">
            <Link style={currentTab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard">
            Admin Dashboard
            </Link>
            
        </div>
        <div className="nav-item bg-dark">
            <Link style={currentTab(history,"/signup")} className="nav-link" to="/signup">
            SignUp
            </Link>
            
        </div>
        <div className="nav-item bg-dark">
            <Link style={currentTab(history,"/signin")} className="nav-link" to="/signin">
            SignIn
            </Link>
            
        </div>
        <div className="nav-item bg-dark">
            <Link style={currentTab(history,"/signout")} className="nav-link" to="/signout">
            SignOut
            </Link>
            
        </div>
        
    </div>
)

export default withRouter(Menu)
