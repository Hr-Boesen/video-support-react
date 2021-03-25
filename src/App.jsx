import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import Home from './pages/Home'
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import SingleSupportCase from './SingleSupportCase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './Settings';

/*

How to create a router-link

 <Link to="/home">Home</Link>
*/


function App(){


    return (
      <Router>
      
        <div>
        <Header/>
        <Footer/>
        
        </div>
      <Switch>
      <Route path="/example"  component= {Example} />
        <Route path="/support" Exact component= {SingleSupportCase} />  
         <Route path="/home"  component= {Home} />
         <Route path="/" Exact component= {Welcome} />  
        
         
      </Switch>
     
      </Router>
      );

}

export default App