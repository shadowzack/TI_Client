import React, { Component } from 'react'

import PropTypes from 'prop-types';
import LanguageItem from '../languages/LanguageItem';

 class LanguageFeed extends Component {
  render() {
      const {languages} =this.props;
    return languages.map(language=><LanguageItem key={language._id} language={language.source} years={language.years[2018]}  count={language.count} />
    )
  }
}

LanguageFeed.propTypes={
    languages:PropTypes.array.isRequired
}

export default LanguageFeed;