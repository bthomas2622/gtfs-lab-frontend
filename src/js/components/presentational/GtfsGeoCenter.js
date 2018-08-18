import React from 'react';
import PropTypes from 'prop-types';

const GtfsGeoCenter = ( props ) => {
  const geoEntries = props.geocenter.map((agencyGeo) => {
    return (<tr key={'agency' + agencyGeo.agency}>
      <td key={agencyGeo.agency}>
        {agencyGeo.agency}
      </td>
      <td key={agencyGeo.AverageStopLatitude}>
        {agencyGeo.AverageStopLatitude}
      </td>
      <td key={agencyGeo.AverageStopLongitude}>
        {agencyGeo.AverageStopLongitude}
      </td>
    </tr>);
  });
  return geoEntries;
};

GtfsGeoCenter.propTypes = {
  geocenter: PropTypes.array.isRequired,
};

export default GtfsGeoCenter;