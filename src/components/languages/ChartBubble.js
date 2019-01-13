import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';
import scrollToComponent from 'react-scroll-to-component';




class LanguageFeed extends Component {

  state = {
    data: [
      {
        x: 3,
        y: 7,
        label: 'Wigglytuff',
        size: 1,
        style: {fontSize: 20},
        rotation: 45
      },
      {x: 2, y: 4, label: 'Psyduck', size: 10},
      {x: 1, y: 20, label: 'Geodude', size: 1},
      {x: 4, y: 12, label: 'Ditto', size: 12, rotation: 45},
      {x: 1, y: 14, label: 'Snorlax', size: 4}
    ]
  };

    OnMarkLanguage(marked){
     // this.props.MarkLanguage(this.state.marked);
     this.props.MarkLanguage(marked);

    }
      
    render() {
      const array=[['Language', 'X', 'Y', 'Questions'],['Nidal',5,3,30]];
      const { languages } = this.props;
     
      //{console.log(this.props.languages.source)}

        languages.map((language)=>
        array.push([ language.source , language.years[2018]-language.years[2013], language.count, language.count ] ))
        //{console.log(array)}


        const {data} = this.state;
    return (
      <div className="center_chart">

<Chart
         width={'100%'}
         height={'100vh'}
  chartType="BubbleChart"
  loader={<div className="Loading"></div>}
  data={array}
  options={{
    explorer: { actions: ['dragToZoom', 'rightClickToReset'] },
    colorAxis: { colors: [ '#fffbd0','#ffd391','#ff727d'] },
    animation: {
      startup: true,
      easing: 'linear',
      duration: 1500,
    },
  }
}


  chartEvents={[
    {
      eventName: 'animationfinish',
      callback: () => {
       // console.log('Animation Finished')
      },
    },
    {
      eventName: 'select',
      callback: ({ chartWrapper }) => {
        const chart = chartWrapper.getChart()
        const selection = chart.getSelection()
       // {console.log(selection)}

        if (selection.length === 1) {
          const [selectedItem] = selection
          const dataTable = chartWrapper.getDataTable()
          const { row ,column} = selectedItem
         // this.OnMarkLanguage(row);
          console.log(row)

          console.log(this.props.marked)

         // console.log(dataTable.getValue)


          // alert(
          //   'You selected : ' +
          //   JSON.parse(array),
          //     // JSON.stringify({
          //     //   row,
          //     //   column,
          //     //  // value: array.getValue(row, column),
          //     // }),

          //   null,
          //   2,
          // )
          //scrollToComponent(ChartLanguage);
          window.scrollTo(0,document.body.scrollHeight);

        }
        //console.log()
      },
    },
  ]}

  rootProps={{ 'data-testid': '200' }}
  chartPackages={['corechart', 'controls']}
  controls={[
    {
      controlType: 'NumberRangeFilter',
      options: {
        filterColumnIndex: 3,
        minValue: 20000,
        maxValue: 1446732,
      },
    },
  ]}
  
/>
      </div>
    );
    }
}

LanguageFeed.propTypes = {
    languages: PropTypes.array.isRequired
}

export default LanguageFeed;