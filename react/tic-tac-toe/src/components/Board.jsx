import Square from "./Square";
const Board = function ({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  const Row = function ({ ids }) {
    return (
      <div className="board-row">
        {ids.map((i) => (
          <Square
            value={squares[i]}
            key={i}
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="status">{status}</div>
      <Row ids={[0, 1, 2]} />
      <Row ids={[3, 4, 5]} />
      <Row ids={[6, 7, 8]} />
    </>
  );
};

export default Board;
