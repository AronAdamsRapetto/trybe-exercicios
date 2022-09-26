import React from 'react';
import PropTypes from 'prop-types';
import GameCell from './GameCell';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    const { gameState, handleClick } = this.props;
    return (
      <div className="game-board">
        {gameState.map((playerId, i) => (
          <GameCell
            id={ i }
            key={ i }
            onClick={ () => handleClick(i) }
            content={ playerId }
          />
        ))}
      </div>
    );
  }
}

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default GameBoard;
