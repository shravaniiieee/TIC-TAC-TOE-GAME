import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        setWinner(board[a]);
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((value, index) => (
          <div
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      {winner ? (
        <div className="winner">
          Player {winner} Wins!
        </div>
      ) : (
        <div className="current-player">
          Current Player: {currentPlayer}
        </div>
      )}
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default App;