import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('App.js', () => {
  test('Testando se ao clicar no link Home vamos para a URL \'/\'', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Testando se ao clicar no link About vamos para a URL \'/about\'', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Testando se ao clicar no link Pokémons Favoritados vamos para a URL \'\'', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavoritePok = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkFavoritePok).toBeInTheDocument();
    userEvent.click(linkFavoritePok);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Testando se digitar uma URL que não existe vai para a pagina Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/notFound');

    const notFound = screen.getByRole('heading', { name: /not found/i });
    expect(notFound).toBeInTheDocument();
  });
});
