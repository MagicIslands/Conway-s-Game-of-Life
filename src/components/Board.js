import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getSquareColourByAge } from "../app/LifeSupport";

const BoardContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

const Square = styled.div.attrs((props) => ({
  style: {
    top: `${props.rowIndex * props.squareSize}px`,
    left: `${props.cellIndex * props.squareSize}px`,
    backgroundColor: `#${getSquareColourByAge(props.squareAge)}`,
    opacity: `${props.squareAge > 0 ? 1 : 0.1}`,
    width: `${props.squareAge > 0 ? 4 : 4}px`,
    height: `${props.squareAge > 0 ? 4 : 4}px`,
  },
}))`
  position: absolute;
  /* transition: all 0.1s ease; */
  border-radius: 5px;
`;

const Board = (props) => {
  const { board, squareSize } = props;
  let arrayKey = 0;
  return (
    <BoardContainer>
      {board.map((row, rowIndex) =>
        row.map((squareAge, cellIndex) => {
          arrayKey += 1;
          return (
            <Square
              key={arrayKey}
              squareAge={squareAge}
              rowIndex={rowIndex}
              cellIndex={cellIndex}
              squareSize={squareSize}
            />
          );
        })
      )}
    </BoardContainer>
  );
};

Board.defaultProps = {
  board: [],
  squareSize: 0,
};

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  squareSize: PropTypes.number,
};

export default Board;
