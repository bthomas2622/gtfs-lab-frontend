import React from 'react';
import PropTypes from 'prop-types';

// const GtfsTransportType = ( props ) => {
//   const transportEntries = props.transport.map((agencyTransport) => {
//     return (<div className="col-md-12" key={'agency' + agencyTransport.agency}>
//       <h5 key={agencyTransport.agency}>
//     Agency: {agencyTransport.agency}
//       </h5>
//       <h4 key={agencyTransport.transportType}>
//     Transport: {agencyTransport.transportType}
//       </h4>
//       <h5 key={agencyTransport.percentage}>
//     Percentage: {agencyTransport.percentage}
//       </h5>
//     </div>);
//   });
//   return transportEntries;
// };

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
  // return <div className="col-md-6"><table style="width:100%">transportEntries</table></div>;
};

GtfsTransportType.propTypes = {
  transport: PropTypes.array.isRequired,
};

export default GtfsTransportType;