import React, { Component } from 'react'

import PropTypes from 'prop-types';
import LanguageItem from '../languages/LanguageItem';
import {XYPlot, LineSeries} from 'react-vis';


 class LanguageFeed extends Component {
  render() {
      const {languages} =this.props;
     // let contnt=languages.map((language)=><div>{language}</div>);
    return(<div> 
               { console.log(languages) }
    </div>)
  }
}

LanguageFeed.propTypes={
    languages:PropTypes.array.isRequired
}

export default LanguageFeed;