
import './App.css';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Switch>
        <Route exact path="/" component={HomePage}></Route>
          <Route exact path ="/register" component={SignUp}/>
          <Route exact path ="/sign-in" component={SignIn}/>
          <PrivateRoute exact path="/my-profile/:id" component={Profile}></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
