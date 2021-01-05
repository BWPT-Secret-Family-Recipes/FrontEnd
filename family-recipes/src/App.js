
import './App.css';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Switch>
        <Route exact path="/" component={HomePage}></Route>
          <Route exact path ="/register" component={SignUp}/>
          <Route exact path ="/sign-in" component={SignIn}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
