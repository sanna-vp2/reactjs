import React, { Component } from "react";
import './App.css';
import './Login.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Home from "./Home";
import Feed from "./Feed";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Login from './Login';



function App(){
    return(
        <Router>
          <Header />
            <Switch>
              <Route path="/Home">
                  <Home />
               </Route>
               <Route path="/Feed">
                  <Feed />
               </Route>
               <Route path="/About">
                  <About />
               </Route>
               <Route path="/Contact">
                  <Contact />
               </Route>
               <Route path="/Login">
                  <Login />
               </Route>
                
            </Switch>
        </Router>
    );
    }

export default App;
