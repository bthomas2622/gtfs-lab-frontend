import React from 'react';
import PropTypes from 'prop-types';

const GtfsNumRoutes = ( props ) => {
  const numroutesEntries = props.numroutes.map((agencyRoutes) => {
    return (<tr key={'agency' + agencyRoutes.agency}>
      <td key={agencyRoutes.agency}>
        {agencyRoutes.agency}
      </td>
      <td key={'routes' + agencyRoutes.count}>
        {agencyRoutes.count}
      </td>
    </tr>);
  });
  return numroutesEntries;
};

GtfsNumRoutes.propTypes = {
  numroutes: PropTypes.array.isRequired,
};

export default GtfsNumRoutes;