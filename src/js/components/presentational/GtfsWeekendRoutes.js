import React from 'react';
import PropTypes from 'prop-types';

const GtfsWeekendRoutes = ( props ) => {
  const weekendEntries = props.weekend.map((agencyWeekend) => {
    let NumWeekendRoutes;
    if (agencyWeekend.NumWeekendRoutes != 0) {
      NumWeekendRoutes = agencyWeekend.NumWeekendRoutes;
    } else {
      NumWeekendRoutes = 'NA';
    }
    return (<tr key={'agency' + agencyWeekend.agency}>
      <td key={agencyWeekend.agency}>
        {agencyWeekend.agency}
      </td>
      <td key={'weekendRoutes' + agencyWeekend.NumWeekendRoutes}>
        {NumWeekendRoutes}
      </td>
    </tr>);
  });
  return weekendEntries;
};

GtfsWeekendRoutes.propTypes = {
  weekend: PropTypes.array.isRequired,
};

export default GtfsWeekendRoutes;