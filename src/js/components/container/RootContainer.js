import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GtfsLabStat from '../presentational/GtfsLabStat';
import AgencyInfo from '../presentational/AgencyInfo';
import GtfsTransportType from '../presentational/GtfsTransportType';
import styles from '../../../styles/stylesheet.css';
import GtfsWeekendRoutes from '../presentational/GtfsWeekendRoutes';

class RootContainer extends Component {
  constructor() {
    super();

    this.state = {
      agencies: [],
      transport: [],
      weekend: [],
      geocenter: [],
      numroutes: [],
      numtrips: []
    };
  }

  componentDidMount() {
    let agencies;
    let transportPromises = [];
    let weekendPromises = [];
    axios.get('http://localhost:3000/static/fetch/agencies')
      .then(res => {
        agencies = res.data;
        this.setState({ agencies });
        agencies.forEach((agency) => {
          transportPromises.push(axios.get(`http://localhost:3000/static/fetch/transport/types?agencyKey=${agency.agency_key}&agency=${agency.agency_id}`));
          weekendPromises.push(axios.get(`http://localhost:3000/static/fetch/weekend?agencyKey=${agency.agency_key}&agency=${agency.agency_id}`));
        });
        axios.all(transportPromises).then((results) => {
          results.forEach((res) => {
            const agencyTransport = [res.data];
            this.setState({ transport: this.state.transport.concat(agencyTransport) });
          });
          const sortedTransport = this.state.transport.sort((a,b) => { return b.percentage - a.percentage; });
          this.setState({ transport: sortedTransport });
        });
        axios.all(weekendPromises).then((results) => {
          results.forEach((res) => {
            const agencyWeekend = [res.data];
            this.setState({ weekend: this.state.weekend.concat(agencyWeekend) });
          });
          const sortedWeekend = this.state.weekend.sort((a,b) => { return b.NumWeekendRoutes - a.NumWeekendRoutes; });
          this.setState({ weekend: sortedWeekend });
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
          <div className="col-md-6">
            <table>
              <tbody>
                <tr>
                  <th>Agency</th>
                  <th>Transport Type</th>
                  <th>Percentage</th>
                </tr>
                <GtfsTransportType transport={this.state.transport} />
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <table>
              <tbody>
                <tr>
                  <th>Agency</th>
                  <th>Num Weekend Routes</th>
                </tr>
                <GtfsWeekendRoutes weekend={this.state.weekend} />
              </tbody>
            </table>
          </div>
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