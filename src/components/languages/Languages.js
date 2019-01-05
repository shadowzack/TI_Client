import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../images/spinner.gif";
import { getLanguages } from "../../actions/languageActions";
import LanguageFeed from "./LanguageFeed";
import ChartLanguages from "./ChartLanguages";
import BubbleLanguages from "./ChartBubble";

class Languages extends Component {
  componentDidMount() {
    console.log("mounted")
    this.props.getLanguages();
    
  }

  render() {
    const { languages, loading } = this.props.language;
    let LanguageContent;
    if (languages === null || loading) {
       // LanguageContent = <Spinner />;
    } else {
        LanguageContent = <LanguageFeed languages={languages} />;
    }
    return (
      <div>
        
        <ChartLanguages languages={languages}/>
        <div className="explore">
      
          <div className="explore_header_container">
           
          </div>
         
          <div className="exploreContainer">{LanguageContent}</div>
        </div>
   
      </div>
    );
  }
}
Languages.propTybes = {
    language: PropTypes.object.isRequired,
    getLanguages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    language: state.language
});
export default connect(
  mapStateToProps,
  { getLanguages }
)(Languages);
