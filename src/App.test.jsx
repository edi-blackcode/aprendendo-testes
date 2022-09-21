import { test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

 /**
* @vitest-environment jsdom
*/

describe('App', () => {
    test('Deverá renderizar o texto corretamente', () => {
        //renderizar meu componente - fingir que está na tela do navegador
        render(<App />)

//capturar o elemento que eu vou testar
const texto = screen.queryByText('Vite + React')

//dizer o que eu espero
expect(texto).toBeInTheDocument()
})

test('Deverá retornar "count +1" quando a usuária clicar no botão uma vez', () => {
    render(<App />)

    const elementoBotao = screen.queryByRole('button')
    expect(screen.queryByText('count is 0')).toBeInTheDocument()
    
    userEvent.click(elementoBotao)
    waitFor(() =>  expect(screen.queryByText('count is 0')).toBeInTheDocument())
})
})