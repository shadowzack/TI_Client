import React, { Component } from 'react'
import PropTypes from 'prop-types';
import LanguageItem from '../languages/LanguageItem';
import {Hint,LineMarkSeries,LabelSeries,XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, ContinuousColorLegend} from 'react-vis';



class LanguageFeed extends Component {

    render() {
        const { languages } = this.props;
        var contnt = languages.map((language)=>
        
        <LineMarkSeries
        className="linemark-series-example"
        style={{
          strokeWidth: '1px'
        }}
        lineStyle={{stroke: 'red' , opacity:"0.4"}}
        markStyle={{stroke: 'red' , opacity:"0.8"}}
        data={[
            {x :2013,y : language.years[2013]},
            {x :2014,y : language.years[2014]},
            {x :2015,y : language.years[2015]},
            {x :2016,y : language.years[2016]},
            {x :2017,y : language.years[2017]},
            {x :2018,y : language.years[2018]}
            ]}

            onSeriesMouseOver={(event)=>{
                console.log("HEEY");


              }}
      />
       /* <LineSeries
        style={{opacity:"0.4"}}
        color="red"
        data={[
            {x :2013,y : language.years[2013]},
            {x :2014,y : language.years[2014]},
            {x :2015,y : language.years[2015]},
            {x :2016,y : language.years[2016]},
            {x :2017,y : language.years[2017]},
            {x :2018,y : language.years[2018]}
            ]}
            onSeriesClick={(event)=>{
                // event.style={{opacity:"1"}}
                

            //  console.log("Clicked" + language.years[2018]);
            
            }}
            />*/
    )

       console.log(contnt);
        return (
            <div className="center_chart">
            <XYPlot
             width={1200}
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