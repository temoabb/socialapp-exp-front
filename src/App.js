import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Registration from './Registration.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Signin from './Signin.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Registration} />
          <Route path="/signin" component={Signin} />
          <Route />
        </Switch>
      </div>
    </Router>
  );
}




export default App;
