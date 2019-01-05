import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classnames from "classnames";


class LanguageItem extends Component {
  
  render() {
    const { language } = this.props;
    

    return (
      <div className="post_item">
        <div className="post_item_name">
          {language}
          <div>
          
          </div>
          <section>
            <h1>{language}</h1>
          </section>
        </div>

        <div className="post_item_des">
          <p> {this.props.count}</p>
        </div>
        <div className="post_item_more">
          <div className="flex-center ">
            <div className="post_item_more_like ">
              <div>
                {" "}
                
                 
              </div>

              <div>
                <p>Years : {this.props.years}
                
                </p>
              </div>
            </div>
            
          </div>
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
