import React from 'react';
import PropTypes from 'prop-types';

const AgencyInfo = ( props ) => {
  const agencyList = props.agencies.map((agency) => {
    return <li key={agency.agency_id}>{ agency.agency_name }</li>;
  });
  return <ul>{ agencyList }</ul>;
};

AgencyInfo.propTypes = {
  agencies: PropTypes.array.isRequired,
};

export default AgencyInfo;
