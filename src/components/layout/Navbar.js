import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';

class Navbar extends Component{
    
    render() {
      return (
<nav className="top_nav">
    <div className="nav_wrapper">
        <section className="logo">
            <Link to="/languages"></Link>
        </section>
        <ul className="main_menu">
            <li><Link to="/languages">languages</Link></li>
        </ul>
        <section className="user">
            <section className="user_profile">
                
            </section>
        </section>
        <section id="hamburger">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="hamburger_menu">
                <li><Link to="/languages"></Link></li>
                <li><Link to="/languages">languages</Link></li>
            </ul>
        </section>
    </div>
</nav>
      )
    }
}

const mapStateToProps=(state)=>({
   
});




  
export default connect(mapStateToProps)(Navbar);