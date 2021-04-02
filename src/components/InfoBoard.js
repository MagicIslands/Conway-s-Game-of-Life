import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InfoBoardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  background-color: #222222;
  color: #ffffff;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  width: 500px;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const InfoItem = styled.li`
  display: grid;
  padding: 7px;
  text-align: center;
`;

const InfoBoard = (props) => {
  const { cycleCount, aliveCount } = props;
  const alivePercent = Math.round(((aliveCount * 100) / 10000 + Number.EPSILON) * 100) / 100;
  return (
    <InfoBoardContainer>
      <InfoItem>Cycles: {cycleCount}</InfoItem>
      <InfoItem>Live: {aliveCount}</InfoItem>
      <InfoItem>Coverage: {alivePercent}%</InfoItem>
    </InfoBoardContainer>
  );
};

InfoBoard.propTypes = {
  cycbleCount: PropTypes.number,
  aliveCount: PropTypes.number,
};

export default InfoBoard;
