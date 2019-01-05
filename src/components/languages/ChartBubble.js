import React, { Component } from 'react'
import PropTypes from 'prop-types';
import LanguageItem from '../languages/LanguageItem';
import {LineMarkSeries,LabelSeries,XYPlot, XAxis, YAxis,MarkSeries, HorizontalGridLines, LineSeries, ContinuousColorLegend} from 'react-vis';
import ShowcaseButton from "./ShowcaseButton";
function generateData() {
    return [
      {
        x: Math.random() * 3,
        y: Math.random() * 20,
        label: 'Wigglytuff',
        size: 30,
        style: {fontSize: 20}
      },
      {x: Math.random() * 3, y: Math.random() * 20, label: 'Psyduck', size: 10},
      {x: Math.random() * 3, y: Math.random() * 20, label: 'Geodude', size: 1},
      {
        x: Math.random() * 3,
        y: Math.random() * 20,
        label: 'red',
        size: 12,
        rotation: 45
      },
      {x: Math.random() * 3, y: Math.random() * 20, label: 'blue', size: 4}
    ];
  }

class LanguageFeed extends Component {

    state = {
        data: [
          {
            x: 3,
            y: 7,
            label: 'Wigglytuff',
            size: 30,
            style: {fontSize: 20},
            rotation: 45
          },
          {x: 2, y: 4, label: 'Psyduck', size: 10},
          {x: 1, y: 20, label: 'Geodude', size: 1},
          {x: 4, y: 12, label: 'Ditto', size: 12, rotation: 45},
          {x: 1, y: 14, label: 'Snorlax', size: 4}
        ]
      };
    render() {
        const {data} = this.state;
    return (
      <div>
        <ShowcaseButton
          onClick={() => this.setState({data: generateData()})}
          buttonContent="UPDATE"
        />
        <XYPlot yDomain={[-1, 22]} xDomain={[-1, 5]} width={300} height={300}>
          <XAxis />
          <YAxis />
          <MarkSeries
            className="mark-series-example"
            strokeWidth={2}
            sizeRange={[5, 15]}
            data={data}
          />
          <LabelSeries animation allowOffsetToBeReversed data={data} />
        </XYPlot>
      </div>
    );
    }
}

LanguageFeed.propTypes = {
    languages: PropTypes.array.isRequired
}

export default LanguageFeed;