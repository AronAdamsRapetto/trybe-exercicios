/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Alguns describe já possuem a orientação do que precisa ser testado.
// Pode modifica-los mas lembre que os testes precisam testar todo o comportamento,
// das casas.
// A funcionalidade não está pronta, portanto esse teste não passará. Crie-a.

describe('Comportamento de cada casa', () => {
  test('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {
    render(<App />);

    // Pode modificar esse teste para se adequar a forma que estiver fazendo o jogo.
    // Aqui está simulando o clique em uma casa

    userEvent.click(screen.getByTestId('cell_0'));
    expect(screen.getByAltText('X')).toBeInTheDocument();
    expect(screen.queryByAltText('O')).not.toBeInTheDocument();

    // Foi testado apenas um clique em uma casa
    // Agora precisa testar um segundo clique em outra casa e verificar o comportamento esperado.

    userEvent.click(screen.getByTestId('cell_1'));
    expect(screen.getByAltText('O')).toBeInTheDocument();
    expect(screen.getByAltText('X')).toBeInTheDocument();
  });

  test('O simbolo precisa ser trocado ao clicar em uma casa para a outra, \'X\' para \'O\', começando com o \'X\'', () => {
    render(<App />);

    const cellGame0 = screen.getByTestId('cell_0');
    const cellGame1 = screen.getByTestId('cell_1');
    const cellGame2 = screen.getByTestId('cell_2');

    userEvent.click(cellGame0);
    userEvent.click(cellGame1);
    userEvent.click(cellGame2);

    expect(screen.getAllByAltText('X')).toHaveLength(2);
    expect(screen.getByAltText('O')).toBeInTheDocument();
  });

  test('Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo', () => {
    render(<App />);

    const cellGame0 = screen.getByTestId('cell_0');
    const cellGame1 = screen.getByTestId('cell_1');

    userEvent.click(cellGame0);
    userEvent.click(cellGame1);
    userEvent.click(cellGame0);

    expect(screen.getByAltText('O')).toBeInTheDocument();
    expect(screen.getByAltText('X')).toBeInTheDocument();
  });

  test('O simbolo das casas precisam ser mantidas, quando outra casa for clicada', () => {
    render(<App />);

    const cellGame0 = screen.getByTestId('cell_0');
    const cellGame1 = screen.getByTestId('cell_1');
    const cellGame2 = screen.getByTestId('cell_2');
    const cellGame3 = screen.getByTestId('cell_3');

    expect(screen.queryByAltText('X')).not.toBeInTheDocument();
    expect(screen.queryByAltText('O')).not.toBeInTheDocument();

    userEvent.click(cellGame0);
    userEvent.click(cellGame1);
    userEvent.click(cellGame2);
    userEvent.click(cellGame3);

    expect(screen.getAllByAltText('X')).toHaveLength(2);
    expect(screen.getAllByAltText('O')).toHaveLength(2);
  });

  test('O simbolo não pode ser mudado se a casa for clicada duas vezes seguidas.', () => {
    render(<App />);

    const cellGame0 = screen.getByTestId('cell_0');

    expect(screen.queryByAltText('X')).not.toBeInTheDocument();

    userEvent.click(cellGame0);
    userEvent.click(cellGame0);

    expect(screen.getByAltText('X')).toBeInTheDocument();
    expect(screen.queryByAltText('O')).not.toBeInTheDocument();
  });
});
