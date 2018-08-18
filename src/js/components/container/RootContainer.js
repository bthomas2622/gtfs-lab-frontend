import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AgencyInfo from '../presentational/AgencyInfo';
import GtfsTransportType from '../presentational/GtfsTransportType';
import styles from '../../../styles/stylesheet.css';
import GtfsWeekendRoutes from '../presentational/GtfsWeekendRoutes';
import GtfsGeoCenter from '../presentational/GtfsGeoCenter';

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
    let geoPromises = [];
    axios.get('http://localhost:3000/static/fetch/agencies')
      .then(res => {
        agencies = res.data;
        this.setState({ agencies });
        agencies.forEach((agency) => {
          transportPromises.push(axios.get(`http://localhost:3000/static/fetch/transport/types?agencyKey=${agency.agency_key}&agency=${agency.agency_id}`));
          weekendPromises.push(axios.get(`http://localhost:3000/static/fetch/weekend?agencyKey=${agency.agency_key}&agency=${agency.agency_id}`));
          geoPromises.push(axios.get(`http://localhost:3000/static/fetch/geo?agencyKey=${agency.agency_key}&agency=${agency.agency_id}`));
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
        axios.all(geoPromises).then((results) => {
          results.forEach((res) => {
            const agencyGeo = [res.data];
            this.setState({ geocenter: this.state.geocenter.concat(agencyGeo) });
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
          <div className="col-md-6">
            <table>
              <tbody>
                <tr>
                  <th>Agency</th>
                  <th>Average Latitute</th>
                  <th>Average Longitude</th>
                </tr>
                <GtfsGeoCenter geocenter={this.state.geocenter} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<RootContainer />, wrapper) : false;

export default RootContainer;