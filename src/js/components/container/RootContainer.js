import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GtfsLabStat from '../presentational/gtfsLabStat';

class RootContainer extends Component {
  constructor() {
    super();

    this.state = {
      agencies: []
    };
  }

  componentDidMount() {
    axios.get('localhost:3000/static/fetch/agencies')
      .then(res => {
        const agencies = res.data;
        this.setState({ agencies });
      });
  }

  render() {
    return (
      <div className="row">
        <GtfsLabStat name='yeyo' />
        <GtfsLabStat name='yeyo2' />
        <GtfsLabStat name='yeyo3' />
        <GtfsLabStat name='yeyo4' />
      </div>
    );
  }
}

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<RootContainer />, wrapper) : false;

export default RootContainer;