import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GtfsLabStat from '../presentational/gtfsLabStat';

class StatContainer extends Component {
  render() {
    return (
      <div>
        <GtfsLabStat name='yeyo' />
        <GtfsLabStat name='yeyo2' />
        <GtfsLabStat name='yeyo3' />
        <GtfsLabStat name='yeyo4' />
      </div>
    );
  }
}

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<StatContainer />, wrapper) : false;

export default StatContainer;