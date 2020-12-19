import React from "react";
import "./Profile.css";
import firebase from 'firebase';
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
function Profile() {
  const [{ user }, dispatch] = useStateValue();
  const authHandler = () =>{
      if(user){
          firebase.auth().signOut();
      }
  }
  return (
    <div className="profile">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt=""
        className="profile_logo"
      />

      <div className="profileCard">
        <div className="avatar">
          <img src={user?.photoURL} alt="" className="profile_avatar" />
        </div>
        <div class="profile_details">
          <h2>{user?.displayName}</h2>
          <p>{user?.email}</p>
        </div>
        <Link to="/login">
        <button className = "logout" onClick={authHandler}>Logout</button>
        </Link>

      </div>
      <Link to="/">
            <button className="back">Back</button>
        </Link>
    </div>
  );
}

export default Profile;
