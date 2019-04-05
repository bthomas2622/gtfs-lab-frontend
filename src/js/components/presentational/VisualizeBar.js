import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

const VisualizeBar = (props) => {
  let agencies = [];
  let graphData = [];
  props.data.forEach(agency => {
    agencies.push(agency.agency);
    graphData.push({ x: agency.agency, y: agency.NumWeekendRoutes, fill: "red"})
  });
  graphData.sort(function(a, b) {
    return a.y - b.y;
  })
  if (agencies.length < 5) {
    return null;
  } else {
    console.log(graphData);
    return (
        <VictoryBar
          alignment="middle"
          animate={{
            onLoad: { duration: 1500 }
          }}
          horizontal="true"
          barRatio={1}
          data={graphData}
          style={{
            data: {
              fill: (d) => d.fill,
              opacity: 1,
            },
          }}
      />)
  }
}

VisualizeBar.propTypes = {
  data: PropTypes.array.isRequired,
};

export default VisualizeBar;