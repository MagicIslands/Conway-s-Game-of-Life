import { initBoard, countNeighbours, lifeOrDeath, lifeCycle } from "../../app/LifeSupport";

const testBoard = [
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 0, 0, 6],
  [1, 2, 0, 0, 0, 0],
  [1, 2, 0, 0, 0, 0],
  [1, 2, 0, 0, 0, 0],
];

describe("Life Support ", () => {
  it("has the same test board", () => {
    const testBoardString = JSON.stringify(testBoard);
    expect(testBoardString).toEqual(
      "[[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,0,0,6],[1,2,0,0,0,0],[1,2,0,0,0,0],[1,2,0,0,0,0]]"
    );
  });

  it("returns right sized board", () => {
    const board3 = initBoard(3);
    const board5 = initBoard(5);

    expect(board3).toHaveLength(3);
    expect(board3[0]).toHaveLength(3);

    expect(board5).toHaveLength(5);
    expect(board5[0]).toHaveLength(5);
  });

  it("returns the right amount of neighbours", () => {
    expect(countNeighbours(4, 4, testBoard)).toEqual(0);
    expect(countNeighbours(3, 3, testBoard)).toEqual(1);
    expect(countNeighbours(5, 2, testBoard)).toEqual(2);
    expect(countNeighbours(2, 4, testBoard)).toEqual(3);
    expect(countNeighbours(3, 2, testBoard)).toEqual(4);
    expect(countNeighbours(2, 2, testBoard)).toEqual(5);
    expect(countNeighbours(1, 3, testBoard)).toEqual(6);
    expect(countNeighbours(2, 1, testBoard)).toEqual(7);
    expect(countNeighbours(1, 1, testBoard)).toEqual(8);
  });

  it("correctly decides life (and age) or death condition", () => {
    expect(lifeOrDeath(4, 4, testBoard)).toEqual(0);
    expect(lifeOrDeath(3, 3, testBoard)).toEqual(0);
    expect(lifeOrDeath(5, 2, testBoard)).toEqual(7);
    expect(lifeOrDeath(2, 4, testBoard)).toEqual(1);
    expect(lifeOrDeath(3, 2, testBoard)).toEqual(0);
    expect(lifeOrDeath(2, 2, testBoard)).toEqual(0);
    expect(lifeOrDeath(1, 3, testBoard)).toEqual(0);
    expect(lifeOrDeath(2, 1, testBoard)).toEqual(0);
    expect(lifeOrDeath(1, 1, testBoard)).toEqual(0);
  });

  it("returns a correct board after 1 lifecycle", () => {
    const nextBoard = lifeCycle(testBoard);
    const nextBoardString = JSON.stringify(nextBoard);
    expect(nextBoardString).toEqual(
      "[[2,0,0,0,0,7],[0,0,0,0,0,0],[0,0,0,0,0,7],[0,0,0,0,0,0],[0,0,1,0,0,0],[2,3,0,0,0,0]]"
    );
  });
});
