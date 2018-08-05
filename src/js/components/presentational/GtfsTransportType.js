import React from 'react';
import PropTypes from 'prop-types';

const GtfsTransportType = ( props ) => {
  const transportEntries = props.transport.map((agencyTransport) => {
    return (<div className="col-md-12" key='yolo'>
      <h3 key={agencyTransport.agency}>
    Agency: {agencyTransport.agency}
      </h3>
      <h4 key={agencyTransport.transportType}>
    Transport: {agencyTransport.transportType}
      </h4>
      <h5 key={agencyTransport.percentage}>
    Percentage: {agencyTransport.percentage}
      </h5>
    </div>);
  });
  return transportEntries;
};

GtfsTransportType.propTypes = {
  transport: PropTypes.array.isRequired,
};

export default GtfsTransportType;