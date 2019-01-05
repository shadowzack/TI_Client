import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classnames from "classnames";


class LanguageItem extends Component {
  constructor(){
    super();

    this.state = {
         border: false
    }
    
}
addBorder(){
  this.setState({border: !this.state.border})
  
}
  render() {
    const { language } = this.props;
    let btn_class = this.state.border ? "addBorder" : "removeBorder";

    return (
    <div className={btn_class}>
<div className="card card-1 " onClick={this.addBorder.bind(this)}>
<section className="center_hero h1_lanaguage">
            <h1>{language}</h1>
          </section>
</div>
</div>
    );
  }
}

LanguageItem.propTypes = {
  language: PropTypes.object.isRequired
};

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps
)(LanguageItem);
