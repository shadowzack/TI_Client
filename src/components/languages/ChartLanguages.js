import React, { Component } from 'react'
import PropTypes from 'prop-types';
import LanguageItem from '../languages/LanguageItem';
import {LabelSeries,XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

class LanguageFeed extends Component {

    render() {
        const { languages } = this.props;
        var contnt = languages.map((language)=>
         
        <LineSeries
        color={"#"+((1<<24)*Math.random()|0).toString(16)}
        data={[
            {x :2013,y : language.years[2013]},
            {x :2014,y : language.years[2014]},
            {x :2015,y : language.years[2015]},
            {x :2016,y : language.years[2016]},
            {x :2017,y : language.years[2017]},
            {x :2018,y : language.years[2018]}
            ]}/>
   )

       console.log(contnt);
        return (
            <div>
                <XYPlot
  width={800}
  height={800}>
  <HorizontalGridLines />
    {contnt}
  <XAxis bot={0}  tickValues={[2013, 2014, 2015, 2016, 2017 , 2018]} title="Years" />
  <YAxis />
</XYPlot>    

            </div>
        );
    }
}

LanguageFeed.propTypes = {
    languages: PropTypes.array.isRequired
}

export default LanguageFeed;