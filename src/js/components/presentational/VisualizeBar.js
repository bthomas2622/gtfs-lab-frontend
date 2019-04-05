import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar } from 'victory';

const VisualizeBar = (props) => {
  let curAgency;
  let graphData = [];
  if (props.data.length < 5) {
    return null;
  } else {
    props.data.forEach(agency => {
      curAgency = agency.agency;
      graphData.push({ x: curAgency, y: agency[props.metric]})
    });
    graphData.sort(function(a, b) {
      return b.y - a.y;
    })
    return (
        <VictoryBar
          alignment="middle"
          animate={{
            onLoad: { duration: 1500 }
          }}
          barRatio={1}
          cornerRadius={10}
          data={graphData}
          horizontal={false}
          padding={{ top: 0, bottom: 0, left: 40, right: 40 }}
          style={{
            data: {
              fill: "black",
              fillOpacity: 0.7,
              stroke: "black",
              strokeWidth: 3
            },
          }}
      />)
  }
}

VisualizeBar.propTypes = {
  data: PropTypes.array.isRequired,
  metric: PropTypes.string.isRequired,
};

export default VisualizeBar;