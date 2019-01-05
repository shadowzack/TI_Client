import React, { Component } from 'react'

import PropTypes from 'prop-types';
import LanguageItem from '../languages/LanguageItem';

 class LanguageFeed extends Component {
  render() {
      const {languages} =this.props;
        let contnt=languages.map((language)=>  <div>{language.Source}</div>) ;
    return(<div> 
        {contnt}
    </div>)
  }
}

LanguageFeed.propTypes={
    languages:PropTypes.array.isRequired
}

export default LanguageFeed;