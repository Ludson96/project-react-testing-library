import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

const more = 'More details';
describe('Testando se as informações detalhadas do pokémon são mostradas na tela', () => {
  test('Se a página contem um texto <name> Details, onde <name> é o nome pok', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: 'Bug' });
    userEvent.click(btnBug);
    const moreDetails = screen.getByRole('link', { name: more });
    userEvent.click(moreDetails);

    const nameDetails = screen.getByText('Caterpie Details');
    expect(nameDetails).toBeInTheDocument();
  });

  test('Se não existi o link de navegação para os detalhes do pokémon', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: 'Bug' });
    userEvent.click(btnBug);
    const moreDetails = screen.getByRole('link', { name: more });
    userEvent.click(moreDetails);

    expect(moreDetails).not.toBeInTheDocument();
  });

  test('Se a seção de detalhes deve conter um heading h2 com o texto Summary;', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: 'Bug' });
    userEvent.click(btnBug);
    const moreDetails = screen.getByRole('link', { name: more });
    userEvent.click(moreDetails);

    const heading = screen.getByRole('heading', { level: 2, name: 'Summary' });
    expect(heading).toBeInTheDocument();
  });

  test('Se a seção de detalhes contem texto com o resumo do pokémon', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: 'Bug' });
    userEvent.click(btnBug);
    const moreDetails = screen.getByRole('link', { name: more });
    userEvent.click(moreDetails);

    const paragraph = screen.getByText(/For protection, it releases a horrible stench /i);
    expect(paragraph).toBeInTheDocument();
  });
});

describe('Testando se existe uma seção de mapas contendo as localizações do pokémon:',
  () => {
    it('Se na seção de detalhes existi um h2 com texto Game Locations of <name>', () => {
      renderWithRouter(<App />);

      const btnBug = screen.getByRole('button', { name: 'Bug' });
      userEvent.click(btnBug);
      const moreDetails = screen.getByRole('link', { name: more });
      userEvent.click(moreDetails);

      const heading = screen.getByRole('heading',
        { level: 2, name: 'Game Locations of Caterpie' });
      expect(heading).toBeInTheDocument();
    });

    it('', () => {
      renderWithRouter(<App />);

      const btnBug = screen.getByRole('button', { name: 'Bug' });
      userEvent.click(btnBug);
      const moreDetails = screen.getByRole('link', { name: more });
      userEvent.click(moreDetails);
    });

    it('Se todas as localizações do pokémon são exibidas na seção de detalhes;', () => {
      renderWithRouter(<App />);

      const btnBug = screen.getByRole('button', { name: 'Bug' });
      userEvent.click(btnBug);
      const moreDetails = screen.getByRole('link', { name: more });
      userEvent.click(moreDetails);

      const images = screen.getAllByAltText('Caterpie location');
      const { foundAt } = pokemons[2];
      images.forEach((image, index) => {
        expect(image).toHaveProperty('src', foundAt[index].map);
      });
    });
  });

describe('Testando se o usuário pode favoritar um pokémon', () => {
  it('Se a página exibi um checkbox que permite favoritar o pokémon', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: 'Bug' });
    userEvent.click(btnBug);
    const moreDetails = screen.getByRole('link', { name: more });
    userEvent.click(moreDetails);

    const favCheckbox = screen.getByRole('checkbox');
    expect(favCheckbox).toBeInTheDocument();
  });

  it('Se o label do checkbox contem o texto "Pokémon favoritado?"', () => {
    renderWithRouter(<App />);

    const btnBug = screen.getByRole('button', { name: 'Bug' });
    userEvent.click(btnBug);
    const moreDetails = screen.getByRole('link', { name: more });
    userEvent.click(moreDetails);

    const favLabel = screen.getByLabelText('Pokémon favoritado?');
    expect(favLabel).toBeInTheDocument();
  });
});
