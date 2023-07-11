import React from 'react';
import App from './App';

import {
  render,
  fireEvent,
  wait,
} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'
// npm run test -- --coverage --watchAll=false

describe('Renderizacao inicial', () => {
  
  test('Titulo renderizou', () => {
    const { getByText } = render(<App />);
    const tittleElement = getByText(/Contador de palavras/i);
    expect(tittleElement).toBeInTheDocument();
  });

  test('Input existe na tela', async () => {
    const { getByPlaceholderText } = render(<App />);

    const input = getByPlaceholderText('Cole ou digite seu texto aqui')

    await wait(() => expect(input).toBeInTheDocument())
  })

  test('Contador zerado na tela', async () => {
    const { getByText } = render(<App />);

    await wait(() => expect(getByText(/0/)).toBeInTheDocument())
  })
})

describe('Digitando algo', () => {

  test('quando o usuario digita, o texto tem que aparecer', async () => {
    const {
      getByPlaceholderText
    } = render( <App /> )

    const input = getByPlaceholderText('Cole ou digite seu texto aqui')

    await wait(() => {
      fireEvent.change(input, {
        target: {
          value: 'palavra teste'
        }
      })
    });

    expect(input).toHaveValue('palavra teste')
  })
})

describe('Digitando algo, contador funciona', () => {
  
  test('quando o usuario digita, o contador altera', async () => {
    const {getByPlaceholderText, findByText} = render(<App/>)

    const input = getByPlaceholderText('Cole ou digite seu texto aqui')

    await wait(() => {
      fireEvent.change(input, {
        target: {
          value: 'palavra teste'
        }
      })
    });

    const contadorAlterou = await findByText(/2/)
    expect(contadorAlterou).toBeInTheDocument()
  })
})

describe('Digitando apenas espaço, contador NÃO muda', () => {
  
  test('quando o usuario digita espaço, o contador NÃO altera', async () => {
    const {getByPlaceholderText, findByText} = render(<App/>)

    const input = getByPlaceholderText('Cole ou digite seu texto aqui')

    await wait(() => {
      fireEvent.change(input, {
        target: {
          value: ' '
        }
      })
    });

    const contadorAlterou = await findByText(/0/)
    expect(contadorAlterou).toBeInTheDocument()
  })
})
