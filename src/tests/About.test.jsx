import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('Testando se a página contém as informações sobre a Pokédex;', () => {
  render(<About />);

  const infoPokedex = screen.getByText(/This application simulates a Pokédex, a digital/);
  expect(infoPokedex).toBeInTheDocument();
});

test('Testando se a página contém um heading h2 com o texto About Pokéde', () => {
  render(<About />);

  const aboutPokedex = screen.getByRole('heading', { level: 2, name: /about pokéde/i });
  expect(aboutPokedex).toBeInTheDocument();
});

test('Testando se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
  render(<About />);

  const twoParagraph = screen.getAllByText(/Pokémons/i);

  expect(twoParagraph).toHaveLength(2);
});

test('Testando se a página contém a imagem de uma Pokédex:', () => {
  render(<About />);

  const imgAlt = screen.getByAltText(/pokédex/i);

  expect(imgAlt.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
