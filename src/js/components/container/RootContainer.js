import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GtfsLabStat from '../presentational/GtfsLabStat';
import AgencyInfo from '../presentational/AgencyInfo';
import GtfsTransportType from '../presentational/GtfsTransportType';

class RootContainer extends Component {
  constructor() {
    super();

    this.state = {
      agencies: [{agency_id: 'placeholder'}],
      transport: [{agency: '1', transport: '2', percentage: '3'}],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/static/fetch/agencies')
      .then(res => {
        const agencies = res.data;
        this.setState({ agencies });
      });
    axios.get('http://localhost:3000/static/fetch/transport/types?agency=Marta')
      .then(res => {
        const transport = [res.data];
        this.setState({ transport });
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <AgencyInfo agencies={this.state.agencies} />
        </div>
        <div className="row">
          <GtfsTransportType transport={this.state.transport} />
        </div>
        <div className="row">
          <GtfsLabStat name='yeyo' />
          <GtfsLabStat name='yeyo2' />
          <GtfsLabStat name='yeyo3' />
          <GtfsLabStat name='yeyo4' />
        </div>
      </div>
    );
  }
}

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<RootContainer />, wrapper) : false;

export default RootContainer;