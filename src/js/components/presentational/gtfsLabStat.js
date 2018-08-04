import React from 'react';
import PropTypes from 'prop-types';

function GtfsStat(props) {
  return (
    <div className="col-md-4">
      <h4>
      Hello, {props.name}
      </h4>
    </div>
  );
}

GtfsStat.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GtfsStat;