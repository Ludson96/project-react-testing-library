import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../pages/NotFound';

test('Testando se a página contém um h2 com o texto Page requested not found;', () => {
  render(<NotFound />);

  const heading = screen.getByRole('heading',
    { level: 2, name: /page requested not found/i });
  expect(heading).toBeInTheDocument();
});

test('', () => {
  render(<NotFound />);

  const imgAlt = screen
    .getByAltText(/Pikachu crying because the page requested was not found/i);
  expect(imgAlt.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
