import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Registration from './Registration.jsx'
import Home from './Home.jsx'
import Products from './pages/Products.jsx'
import Navbar from './Navbar.jsx'
import Signin from './Signin.jsx'
import Fixed from './components/FixedDiv/Fixed.jsx'
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.get('http://localhost:8080/api/user', {
      headers: {
        Authorization: localStorage.getItem('accessToken')
      }
    })
      .then(data => {
        console.log('data', data)
      })
      .catch(err => console.log('error', err))
  }, [])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Registration} />
          <Route path="/signin" component={Signin} />
          <Route path="/discover" component={Products} />
          <Route />
        </Switch>
        <Fixed />
      </div>
    </Router>
  );
}




export default App;
