import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/loader-bouncing.css';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import page
import Home from './components/Home';

function App() {
  const [token, setToken] = useState()

  if (!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <div className="wrapper">    
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;