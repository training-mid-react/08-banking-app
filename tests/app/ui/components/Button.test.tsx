import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../../../../src/app/ui/components/Button';

describe('Pruebas en el componente Button', () => {
  test('Match snapshot', () => {
    const { asFragment } = render(<Button text="Hola mundo" handleClick={() => { }} type='button' />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  test('Renderiza el texto correctamente', () => {
    render(<Button text="Hola mundo" handleClick={() => { }} type='button' />);    
    expect(screen.getByText('Hola mundo')).toBeTruthy();
  });

  test('Llama la funcion handleClick correctamente', () => {
    const handleClick = vi.fn();
    render(<Button text="Hola mundo" handleClick={handleClick} type='button' />);
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});