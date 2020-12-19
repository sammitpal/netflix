import React from 'react';
import './Navbar.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
function Navbar() {
    const [{user},dispatch] = useStateValue();
    return (
        <div className="navbar">
            <img className = "navbar_Logo" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt=""/>
            {!user?(<Link to="/login">
                <Avatar className = "navbar_avatar" src = {user?.photoURL}/>
            </Link>):(<Link to="/profile">
                <Avatar className = "navbar_avatar" src = {user?.photoURL}/>
            </Link>)}
        </div>
    )
}

export default Navbar
