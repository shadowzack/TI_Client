import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';

class LanguageFeed extends Component {

    render() {
        const { languages } = this.props;
        var i=180;


        const array=[['Year',],
                   [2013,],
                   [2014,],
                   [2015,],
                   [2016,],
                   [2017,],
                   [2018,]];
        {console.log(array)}

        var contnt = languages.map((language)=>{
        if(language.count > 30000){
        array[0].push(language.source)
        array[1].push(language.years[2013])
        array[2].push(language.years[2014])
        array[3].push(language.years[2015])
        array[4].push(language.years[2016])
        array[5].push(language.years[2017])
        array[6].push(language.years[2018])
        }
    }
        )

        return (
            <div className="center_chart">
     <Chart
         width={'100%'}
         height={'100vh'}
         chartType="Line"
         loader={<div className="Loading">
          </div>}
         data={array}
         options={{
            backgroundColor: '#E4E4E4',
           hAxis: {
            format: 'percent',
            title: 'Year'
          },
         vAxis: {

           title: 'Questions'
         },
         series: { 
                10 : {lineWidth : 5} 
            },
  }}
  //rootProps={{ 'data-testid': '1' }}

/>  
             </div>
        );
    }
}

LanguageFeed.propTypes = {
    languages: PropTypes.array.isRequired
}

export default LanguageFeed;