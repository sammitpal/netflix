import React from 'react'
import './Login.css'
import firebase from 'firebase';
import {auth} from './firebase';
import { useHistory } from 'react-router-dom';
function Login() {
    const history  = useHistory();
    var provider = new firebase.auth.GoogleAuthProvider();
    const signIn = e =>{
        e.preventDefault();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            history.push("/");
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorMessage = error.message;
            // The email of the user's account used.
            // The firebase.auth.AuthCredential type that was used.
            window.alert(errorMessage);
            // ...
          });
    }
    return (
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="" className="login_logo"/>
            <div className="tagline">
            <h1>Unlimited Movies, TV shows and More</h1>
            </div>
            <div className="login_button">
                <button onClick={signIn} type="submit"><i class="fab fa-google"></i>Sign in with Google</button>
            </div>
        </div>
    )
}

export default Login
