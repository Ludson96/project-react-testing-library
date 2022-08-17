import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';

test('Testando se é exibida a mensagem No favorite pokemon found', () => {
  render(<FavoritePokemons />);

  const favoritePokemon = screen.getByText(/No favorite pokemon found/i);
  expect(favoritePokemon).toBeInTheDocument();
});
