import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    const btnElement = screen.getByRole('button', { name: /adicionar/i });

    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toHaveTextContent('Adicionar');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    const btnElement = screen.getByRole('button', { name: /adicionar/i });
    const inputElement = screen.getByLabelText(/tarefa:/i);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');

    userEvent.type(inputElement, 'Tarefa');

    expect(inputElement).toHaveValue('Tarefa');

    userEvent.click(btnElement);

    expect(inputElement).toHaveValue('');
    expect(screen.getByText('Tarefa')).toBeInTheDocument();
  });
});
