const HistoricMoves = function ({ jumpTo, history }) {
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Ir al movimiento #" + move;
    } else {
      description = "Ir al inicio del juego";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game-info">
      <ol>{moves}</ol>
    </div>
  );
};

export default HistoricMoves;
