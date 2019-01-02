import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class home extends Component {
  

  render() {
    return (
      <div className="events_home">
        <div className="events_home_upper">
          <div className="events_home_conatiner">

          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
 
});

export default connect(mapStateToProps)(home);
