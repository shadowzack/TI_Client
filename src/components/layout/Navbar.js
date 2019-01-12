import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';

class Navbar extends Component{
    
    render() {
      return (
<nav className="top_nav">
    <div className="nav_wrapper">
    <div className="logo">
   <Link to="/"></Link>
    </div>   
    </div>
</nav>
      )
    }
}

const mapStateToProps=(state)=>({
   
});




  
export default connect(mapStateToProps)(Navbar);