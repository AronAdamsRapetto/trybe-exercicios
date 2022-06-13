import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const fetchResponse = [
  {
    name: 'Agumon',
    img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    level: 'Rookie',
  },
];

describe('Teste da aplicação toda', () => {
  beforeEach(() => {
    render(<App />);

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(fetchResponse),
    });
  });

  it('Testa se input e botão existem na tela', () => {
    const inputElement = screen.getByLabelText(/digimon/i);
    const btnElement = screen.getByRole('button', { name: /search digimon/i });

    expect(inputElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
  });

  it('Testa se é possível digitar no input', () => {
    const inputElement = screen.getByLabelText(/digimon/i);

    userEvent.type(inputElement, 'agumon');

    expect(inputElement).toHaveValue('agumon');
  });

  it('Testa se nada acontece ao clicar no botão sem preecher o input', () => {
    const btnElement = screen.getByRole('button', { name: /search digimon/i });

    userEvent.click(btnElement);

    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('Testa se ao clicar no botão a função fetch é chamada', () => {
    const inputElement = screen.getByLabelText(/digimon/i);
    const btnElement = screen.getByRole('button', { name: /search digimon/i });

    const URL = 'https://digimon-api.vercel.app/api/digimon/name/agumon';

    userEvent.type(inputElement, 'agumon');
    userEvent.click(btnElement);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(URL);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('Testa se é feito log ao ser disparado erro na requisição', async () => {
    const erro = 'Algo de errado não está certo';
    const throwError = new Error(erro);
    const mensagemEsperada = `Erro ao fazer a requisição: Error: ${erro}`;

    global.fetch = jest.fn().mockRejectedValue(throwError);

    let mensagem = '';

    jest.spyOn(global.console, 'log').mockImplementation((log) => { mensagem = log; });

    const inputElement = screen.getByLabelText(/digimon/i);
    const btnElement = screen.getByRole('button', { name: /search digimon/i });

    userEvent.type(inputElement, 'agumon');
    userEvent.click(btnElement);

    await waitFor(() => expect(mensagem).toEqual(mensagemEsperada));

    expect(mensagem).toEqual(mensagemEsperada);
  });

  it('Testa se ao clicar no botão é mostrado na tela o digimon buscado', async () => {
    const inputElement = screen.getByLabelText(/digimon/i);
    const btnElement = screen.getByRole('button', { name: /search digimon/i });

    userEvent.type(inputElement, 'agumon');
    userEvent.click(btnElement);

    expect(await screen.findByRole('heading', {
      name: /agumon/i,
      level: 2,
    })).toBeInTheDocument();
    expect(await screen.findByText(/level: rookie/i)).toBeInTheDocument();
    expect(await screen.findByAltText(/agumon/i)).toBeInTheDocument();
  });

  it('Testa se é tratado o erro ao buscar um digimon que não existe', async () => {
    const errorFetchAPI = { ErrorMsg: 'Aron is not a Digimon in our database.' };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(errorFetchAPI),
    });
    const inputElement = screen.getByLabelText(/digimon/i);
    const btnElement = screen.getByRole('button', { name: /search digimon/i });

    userEvent.type(inputElement, 'aron');
    userEvent.click(btnElement);

    expect(await screen.findByText(/aron is not a digimon in our database./i))
      .toBeInTheDocument();
  });
});
