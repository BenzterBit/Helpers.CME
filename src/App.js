import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Header from './Header/Header';

function App() {
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
