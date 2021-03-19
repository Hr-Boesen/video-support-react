import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import Home from './pages/Home'
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"


function App(){


    return (
      <Router>
      
        <div>
        <Header/>
        <nav>
        <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/">Welcome</Link></li>
        </ul>
        </nav>
        <Footer/>
        
        </div>
      <Switch>
         <Route path="/home"  component= {Home} />
         <Route path="/" Exact component= {Welcome} />  
         
      </Switch>
     
      </Router>
      );

}

export default App