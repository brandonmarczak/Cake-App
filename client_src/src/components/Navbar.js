import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <div>
             <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/"><i className="fa fa-birthday-cake"></i> Cakes</Link></li>  
            <li><Link to="/cakes/add"><i className="fa fa-plus"></i> Add Cake</Link></li>  
            <li><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></li> 
            </ul>        
           
    </div>
  </nav>
            </div>
        );
    }
}

export default Navbar;