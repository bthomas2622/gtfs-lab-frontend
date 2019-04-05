import React from 'react';
import PropTypes from 'prop-types';
import { VictoryTheme, VictoryPie } from 'victory';

const VisualizePie = (props) => {
  let agencies = [];
  let graphData = [];
  let tickCount = [];
  let graphDataCount = 1;
  console.log(props.data);
  props.data.forEach(agency => {
    agencies.push(agency.agency);
    graphData.push({ x: agency.agency.substring(0, 3), y: agency.NumWeekendRoutes})
    tickCount.push(graphDataCount);
    graphDataCount += 1;
  });
  if (agencies.length < 5) {
    return null;
  } else {
    console.log(graphData);
    return (<VictoryPie
        colorScale="warm"
        animate={{
          duration: 5000
        }}
        innerRadius={20}
        padAngle={3}
        data={graphData}
        theme={VictoryTheme.material}
        labels={(d) => `${d.x}`}
        padding={{ top: 2, bottom: 2, left: 2, right: 2 }}
        style={{
          labels: {
            fill: "#000000", fontSize: 15,
          },
        }}
      />)
  }
}

VisualizePie.propTypes = {
  data: PropTypes.array.isRequired,
};

export default VisualizePie;