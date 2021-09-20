import './App.css';
import React , {useEffect} from 'react';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Header/Header';
import { auth } from './firebase';
import { useStateValue } from './StateProvider/StateProvider';
import { ACTIONS } from './StateProvider/reducer';

function App() {
  const [ , dispatch]= useStateValue();
  useEffect(() => {
    if(auth){
      auth.onAuthStateChanged(user => {
        if(user){
          dispatch({type:ACTIONS.SET_USER, payload:user});
        }else{
          dispatch({type:ACTIONS.SET_USER, payload:null});
        }
      })
    }
  },[])

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <LandingPage />
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;
