import React from 'react';
import PropTypes from 'prop-types';

const AgencyInfo = ( props ) => (
  <div className="col-md-12">
    <h1>Agency GTFS Data</h1>
    <li>{props.name}</li>
  </div>
);

AgencyInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AgencyInfo;