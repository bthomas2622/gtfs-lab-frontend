import React from 'react';
import PropTypes from 'prop-types';

const GtfsTransportType = ( props ) => {
  const transportEntries = props.transport.map((agencyTransport) => {
    return (<tr key={'agency' + agencyTransport.agency}>
      <td key={agencyTransport.agency}>
        {agencyTransport.agency}
      </td>
      <td key={agencyTransport.transportType}>
        {agencyTransport.transportType}
      </td>
      <td key={agencyTransport.percentage}>
        {agencyTransport.percentage}
      </td>
    </tr>);
  });
  return transportEntries;
};

GtfsTransportType.propTypes = {
  transport: PropTypes.array.isRequired,
};

export default GtfsTransportType;