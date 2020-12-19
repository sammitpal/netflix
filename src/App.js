import './App.css';
import React, {useEffect} from 'react';
import HomePage from './HomePage';
import Login from './Login';
import firebase from 'firebase'
import { useStateValue } from './StateProvider';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Profile from './Profile';
function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(authUser => {
      console.log("USER ->", authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
