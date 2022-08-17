import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando se é renderizado as informações de determinado pokémon:', () => {
  it('Se o nome correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: /bug/i });
    userEvent.click(btnBug);
    const namePokemon = screen.getByTestId('pokemon-name');
    expect(namePokemon.innerHTML).toBe('Caterpie');
  });

  it('Se o tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: /bug/i });
    userEvent.click(btnBug);
    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon.innerHTML).toBe('Bug');
  });

  it('Se o peso médio do pokémon deve ser exibido', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: /bug/i });
    userEvent.click(btnBug);
    const weightPokemon = screen.getByTestId('pokemon-weight');
    expect(weightPokemon.innerHTML).toBe('Average weight: 2.9 kg');
  });

  it('Se a imagem do pokémon é exibida', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: /bug/i });
    userEvent.click(btnBug);
    const img = screen.getByRole('img', { name: 'Caterpie sprite' });
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png');
  });
});

describe('Testando se o card do pokémon tem link pra exibir info deste pokémon', () => {
  it('O link deve possuir a URL /pokemons/<id>, onde <id> é o id do pokémon', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: /bug/i });
    userEvent.click(btnBug);

    const linkNav = screen.getByRole('link', { name: 'More details' });
    expect(linkNav).toHaveAttribute('href', '/pokemons/10');
  });
});

describe('Testando se ao clicar no link de navegação do pokémon:, ', () => {
  it('Se é feito o redirecionamento da aplicação para a página de detalhes', () => {
    const { history } = renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: /bug/i });
    userEvent.click(btnBug);

    const linkNav = screen.getByRole('link', { name: 'More details' });

    userEvent.click(linkNav);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/10');
  });
});

describe('Testando se existe um ícone de estrela nos pokémons favoritados:', () => {
  const pokemons = 10;

  beforeEach(() => {
    localStorage.setItem('favoritePokemonIds', JSON.stringify([pokemons]));
  });

  it('Se o ícone é uma imagem com src contendo o caminho /star-icon.svg', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: /bug/i });
    userEvent.click(btnBug);

    const favoriteStar = screen.getByAltText('Caterpie is marked as favorite');

    expect(favoriteStar).toHaveAttribute('src', '/star-icon.svg');
  });
});
