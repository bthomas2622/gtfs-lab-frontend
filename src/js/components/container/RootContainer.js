import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AgencyInfo from '../presentational/AgencyInfo';
import GtfsTransportType from '../presentational/GtfsTransportType';
import styles from '../../../styles/stylesheet.css';
import GtfsWeekendRoutes from '../presentational/GtfsWeekendRoutes';
import GtfsGeoCenter from '../presentational/GtfsGeoCenter';
import GtfsNumRoutes from '../presentational/GtfsNumRoutes';
import GtfsNumTrips from '../presentational/GtfsNumTrips';

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
    const backendPath = 'https://gtfs-lab.herokuapp.com';
    let agencies;
    let transportPromises = [];
    let weekendPromises = [];
    let geoPromises = [];
    let numroutesPromises = [];
    let numtripsPromises = [];
    axios.get(`${backendPath}/static/fetch/agencies`)
      .then(res => {
        agencies = res.data;
        this.setState({ agencies });
        agencies.forEach((agency) => {
          transportPromises.push(axios.get(`${backendPath}/static/fetch/transport/types?agencyKey=${agency.agency_key}&agency=${agency.agency_id}`));
          weekendPromises.push(axios.get(`${backendPath}/static/fetch/weekend?agencyKey=${agency.agency_key}&agency=${agency.agency_id}`));
          geoPromises.push(axios.get(`${backendPath}/static/fetch/geo?agencyKey=${agency.agency_key}&agency=${agency.agency_id}`));
          numroutesPromises.push(axios.get(`${backendPath}/static/fetch/count?agencyKey=${agency.agency_key}&agency=${agency.agency_id}&dataset=routes`));
          numtripsPromises.push(axios.get(`${backendPath}/static/fetch/count?agencyKey=${agency.agency_key}&agency=${agency.agency_id}&dataset=trips`));
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
        axios.all(numroutesPromises).then((results) => {
          results.forEach((res) => {
            const agencyNumroutes = [res.data];
            this.setState({ numroutes: this.state.numroutes.concat(agencyNumroutes) });
          });
          const sortedNumroutes = this.state.numroutes.sort((a,b) => { return b.count - a.count; });
          this.setState({ numroutes: sortedNumroutes });
        });
        axios.all(numtripsPromises).then((results) => {
          results.forEach((res) => {
            const agencyNumtrips = [res.data];
            this.setState({ numtrips: this.state.numtrips.concat(agencyNumtrips) });
          });
          const sortedNumtrips = this.state.numtrips.sort((a,b) => { return b.count - a.count; });
          this.setState({ numtrips: sortedNumtrips });
        });
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 agencies">
            <h3>Transit Agencies Tracked</h3>
            <AgencyInfo agencies={this.state.agencies} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 gtfstable">
            <p className="tabletitle">
              MOST COMMON TRANSPORT TYPE
            </p>
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
          <div className="col-md-6 gtfstable">
            <p className="tabletitle">
              NUMBER OF WEEKEND ROUTES
            </p>
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
          <div className="col-md-6 gtfstable">
            <p className="tabletitle">
              TOTAL TRANSIT ROUTES
            </p>
            <table>
              <tbody>
                <tr>
                  <th>Agency</th>
                  <th>Total Routes Count</th>
                </tr>
                <GtfsNumRoutes numroutes={this.state.numroutes} />
              </tbody>
            </table>
            <p className="tabledesc">
              A route is an ordered group of stops that are displayed to riders as a single service. 
            </p>
          </div>
          <div className="col-md-6 gtfstable">
            <p className="tabletitle">
              TOTAL TRANSIT TRIPS 
            </p>
            <table>
              <tbody>
                <tr>
                  <th>Agency</th>
                  <th>Total Trips Count</th>
                </tr>
                <GtfsNumTrips numtrips={this.state.numtrips} />
              </tbody>
            </table>
            <p className="tabledesc">
              A trip is a sequence of two or more stops that occurs at specific time. 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 gtfstable">
            <p className="tabletitle">
              AVG GEO LOCATION 
            </p>
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
            <p className="tabledesc">
              The average of the latitudinal and longitudinal coordinates for all stops. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<RootContainer />, wrapper) : false;

export default RootContainer;