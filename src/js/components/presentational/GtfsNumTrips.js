import React from 'react';
import PropTypes from 'prop-types';

const GtfsNumTrips = ( props ) => {
  const numtripsEntries = props.numtrips.map((agencyTrips) => {
    return (<tr key={'agency' + agencyTrips.agency}>
      <td key={agencyTrips.agency}>
        {agencyTrips.agency}
      </td>
      <td key={'trips' + agencyTrips.count}>
        {agencyTrips.count}
      </td>
    </tr>);
  });
  return numtripsEntries;
};

GtfsNumTrips.propTypes = {
  numtrips: PropTypes.array.isRequired,
};

export default GtfsNumTrips;