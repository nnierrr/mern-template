import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from "./components/users/User";
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import About from "./pages/About"; 
import Home from './pages/Home';
import NotFound from "./pages/NotFound";


import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/AlertState";

import './App.css';
const App = () => {

  return (
    <GithubState>
    <AlertState>
      <Router>
          <div className="App">
              <Navbar />
              <div className="container">
                  <Alert alert={alert} />
                  <Switch>
                      <Route
                          exact
                          path="/"
                          component={Home}
                      />
                      <Route 
                        exact 
                        path="/about" 
                        component={About} 
                      />
                      <Route
                        component={NotFound}
                      />
                      <Route
                          exact
                          path="/user/:login"
                          render={ props => (
                              <User
                                username={props.match.params.login}
                              />  
                          )}
                      />
                  </Switch>
              </div>
          </div>
      </Router>
    </AlertState>
    </GithubState>
  );  
}


export default App;
