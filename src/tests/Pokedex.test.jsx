import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Testando se a página contém um h2 com o texto Encountered pokémons;', () => {
  renderWithRouter(<App />);

  const heading = screen.getByRole('heading',
    { level: 2, name: /Encountered pokémons/i });

  expect(heading).toBeInTheDocument();
});

test('Testando se é exibido o próximo pokémon quando o botão Próximo é clicado', () => {
  renderWithRouter(<App />);

  const btnPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(btnPokemon).toBeInTheDocument();
  userEvent.click(btnPokemon);
  const onePokemon = screen.getAllByTestId('pokemon-name');
  expect(onePokemon).toHaveLength(1);
});

test('Testando se a Pokédex tem os botões de filtro', () => {
  renderWithRouter(<App />);

  const btnAll = screen.getByRole('button', { name: /All/i });
  expect(btnAll).toBeInTheDocument();

  const allBtn = screen.getAllByTestId('pokemon-type-button');
  const numberOfBtn = 7;
  expect(allBtn).toHaveLength(numberOfBtn);

  allBtn.forEach((type) => {
    const filterSingle = screen.getByRole('button', { name: `${type.innerHTML}` });
    expect(filterSingle).toBeInTheDocument();

    userEvent.click(type);
    const typeOfPokemon = screen.getByTestId('pokemon-type');
    expect(typeOfPokemon.innerHTML).toBe(`${type.innerHTML}`);
  });
});

test('Testando se a Pokédex contém um botão para resetar o filtro:', () => {
  renderWithRouter(<App />);

  const btnAll = screen.getByRole('button', { name: /All/i });
  expect(btnAll).toBeInTheDocument();

  userEvent.click(btnAll);

  const namePikachu = screen.getByTestId('pokemon-name');
  expect(namePikachu.innerHTML).toBe('Pikachu');
});
