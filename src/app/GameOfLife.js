import React from "react";
import Board from "../components/Board";
import InfoBoard from "../components/InfoBoard";
import GraphBoard from "../components/GraphBoard";
import { initBoard, lifeCycle, countAlive, getNLastReversedValuesFromArray } from "./LifeSupport";

class GameOfLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cycleCount: 0,
      board: initBoard(100),
      squareSize: 5,
      aliveCount: 0,
      aliveCountLog: [],
      graphLength: 166,
    };
  }

  componentDidMount() {
    this.timer();
  }

  componentDidUpdate() {
    const { cycleCount } = this.state;
    if (cycleCount < 500) {
      setTimeout(() => this.timer(), 0);
    }
  }

  timer() {
    let { cycleCount, board } = this.state;
    const { aliveCountLog } = this.state;
    cycleCount += 1;
    board = lifeCycle(board);

    const aliveCount = countAlive(board);
    if (cycleCount > 1) {
      aliveCountLog.push(aliveCount);
    }

    this.setState({
      cycleCount,
      board,
      aliveCount,
      aliveCountLog,
    });
  }

  render() {
    const { board, cycleCount, aliveCount, squareSize, aliveCountLog, graphLength } = this.state;
    const aliveCountLogDisplay = getNLastReversedValuesFromArray(aliveCountLog, graphLength);
    return (
      <div>
        <Board board={board} squareSize={squareSize} />
        <GraphBoard aliveCountLogDisplay={aliveCountLogDisplay} />
        <InfoBoard cycleCount={cycleCount} aliveCount={aliveCount} />
      </div>
    );
  }
}

export default GameOfLife;
