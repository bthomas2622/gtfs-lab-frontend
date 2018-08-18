import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GtfsLabStat from '../presentational/GtfsLabStat';
import AgencyInfo from '../presentational/AgencyInfo';
import GtfsTransportType from '../presentational/GtfsTransportType';
import styles from '../../../styles/stylesheet.css';

class RootContainer extends Component {
  constructor() {
    super();

    this.state = {
      agencies: [],
      transport: [],
    };
  }

  componentDidMount() {
    let agencies;
    axios.get('http://localhost:3000/static/fetch/agencies')
      .then(res => {
        agencies = res.data;
        this.setState({ agencies });
        agencies.forEach((agency) => {
          axios.get(`http://localhost:3000/static/fetch/transport/types?agencyKey=${agency.agency_key}&agency=${agency.agency_id}`)
            .then(res => {
              const agencyTransport = [res.data];
              this.setState({ transport: this.state.transport.concat(agencyTransport) });
            });
        });
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h3>Transit Agencies Tracked</h3>
            <AgencyInfo agencies={this.state.agencies} />
          </div>
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