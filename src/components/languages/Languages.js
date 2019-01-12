import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../images/spinner.gif";
import { getLanguages } from "../../actions/languageActions";
import LanguageFeed from "./LanguageFeed";
import ChartLanguages from "./ChartLanguagesv2";
import BubbleLanguages from "./ChartBubble";

class Languages extends Component {
  constructor(){
    super()
    this.state = {
      marked: null
    };
  } 

  componentDidMount() {
    console.log("mounted")
    this.props.getLanguages();
    
  }

  MarkLanguage(markit){
    this.setState({
      marked: markit
    });
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
        <BubbleLanguages languages={languages} marked={this.state.marked} MarkLanguage={this.MarkLanguage.bind(this)}/>
       
        <ChartLanguages languages={languages} marked={this.state.marked}/>
        {/* <div className="explore">
      
          <div className="explore_header_container">
           
          </div>
         
          <div className="exploreContainer">{LanguageContent}</div>
        </div> */}
   
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
