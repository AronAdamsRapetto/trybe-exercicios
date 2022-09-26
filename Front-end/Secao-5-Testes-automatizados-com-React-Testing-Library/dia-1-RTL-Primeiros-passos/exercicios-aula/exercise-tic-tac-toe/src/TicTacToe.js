/* eslint-disable no-magic-numbers */
import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: 0,
      draw: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.finishGame = this.finishGame.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClick(indexCell) {
    const { activePlayer, gameBoard } = this.state;
    const updatedGameBoard = gameBoard.map((cell, index) => {
      if (index === indexCell && cell === 0) {
        this.changePlayer();
        return activePlayer;
      }
      return cell;
    });
    this.setState({ gameBoard: updatedGameBoard }, this.finishGame);
  }

  // aron e meu papai love
  // laura filha
  // dia 28 mes março ano 2014 anos 8

  handleClickReset() {
    const { gameBoard } = this.state;

    const resetBoard = gameBoard.map(() => 0);
    this.setState({
      gameBoard: resetBoard,
      winner: 0,
      draw: false,
    });
  }

  getWinner() {
    let winner = this.matcher({ firstCells: [0, 3, 6], incrementCells: [1, 2] });

    if (winner === undefined) {
      winner = this.matcher({ firstCells: [0, 1, 2], incrementCells: [3, 6] });
    }
    if (winner === undefined) {
      winner = this.matcher({ firstCells: [0], incrementCells: [4, 8] });
    }
    if (winner === undefined) {
      winner = this.matcher({ firstCells: [2], incrementCells: [2, 4] });
    }
    return winner;
  }

  finishGame() {
    const { gameBoard } = this.state;
    const winner = this.getWinner();
    const draw = gameBoard.every((cell) => cell !== 0);

    if (winner && !draw) {
      this.setState({ winner });
    }
    if (!winner && draw) {
      this.setState({ draw });
    }
    if (winner && draw) {
      this.setState({ winner });
    }
  }

  matcher({ firstCells, incrementCells }) {
    const { gameBoard } = this.state;
    const players = [1, 2];
    const winner = players.find((player) => firstCells.some((firstCell) => {
      if (gameBoard[firstCell] === player
        && gameBoard[firstCell + incrementCells[0]] === player
        && gameBoard[firstCell + incrementCells[1]] === player) {
        return true;
      }
      return false;
    }));
    return winner;
  }

  changePlayer() {
    const { activePlayer } = this.state;
    if (activePlayer === 1) {
      this.setState({ activePlayer: 2 });
    } else {
      this.setState({ activePlayer: 1 });
    }
  }

  render() {
    const { gameBoard, winner, draw } = this.state;
    return (
      <div>
        {
          winner !== 0 && <h1>{`Player ${winner === 1 ? 'X' : 'O'} Ganhou`}</h1>
        }
        {
          draw && <h1>Empate</h1>
        }
        <GameBoard gameState={ gameBoard } handleClick={ this.handleClick } />
        <button type="button" onClick={ this.handleClickReset }>Reset</button>
      </div>
    );
  }
}

export default TicTacToe;
