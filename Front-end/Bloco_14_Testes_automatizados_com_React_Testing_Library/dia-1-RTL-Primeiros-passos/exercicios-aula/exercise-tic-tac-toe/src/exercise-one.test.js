import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Configuração inicial do jogo', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Verificar se foi renderizada nove casas', () => {
    const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    gameBoard
      .forEach((_blocks, index) => expect(screen
        .getByTestId(`cell_${index}`))
        .toBeInTheDocument());
  });

  test('Começar com todos os espaços em branco.', () => {
    const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    gameBoard
      .forEach((_blocks, index) => expect(screen
        .getByTestId(`cell_${index}`))
        .toBeEmpty());
  });

  test('Começar sem a frase \'Fim de jogo\'', () => {
    const endGameElement = screen.queryByText(/fim de jogo/i);

    expect(endGameElement).not.toBeInTheDocument();
  });
});
