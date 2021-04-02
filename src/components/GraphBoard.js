import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GraphBarContainer = styled.div`
  position: relative;
  width: 500px;
  height: 100px;
`;

const GraphBar = styled.div.attrs((props) => ({
  style: {
    right: `${props.barIndex * 3}px`,
    height: `${props.barValue + 1}px`,
  },
}))`
  position: absolute;
  width: 2px;
  bottom: 0px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #ffffff;
`;

const minMax = (graphArray, verticalLimit) => {
  const maxArrayValue = Math.max(...graphArray);
  const minArrayValue = Math.min(...graphArray);
  const graphMargin = (maxArrayValue - minArrayValue) / 2;
  const graphScale = maxArrayValue / verticalLimit;
  return { graphScale, graphMargin };
};

const GraphBoard = (props) => {
  const { aliveCountLogDisplay } = props;
  const { graphScale, graphMargin } = minMax(aliveCountLogDisplay, 100);
  let arrayKey = -1;
  return (
    <GraphBarContainer>
      {aliveCountLogDisplay.map((barValue) => {
        arrayKey += 1;
        return <GraphBar key={arrayKey} barIndex={arrayKey} barValue={(barValue - graphMargin) / graphScale} />;
      })}
    </GraphBarContainer>
  );
};

GraphBoard.defaultProps = {
  aliveCountLogDisplay: [],
};

GraphBoard.propTypes = {
  aliveCountLogDisplay: PropTypes.arrayOf(PropTypes.number),
};

export default GraphBoard;
