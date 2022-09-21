import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, test} from 'vitest'
import Counter from './Counter'

/**
 * @vitest-environment jsdom
 */

    describe('Counter', () => {
        beforeEach(() => {
            render(<Counter />)
        })

    test('deverá renderizar o valor inicial 0', () => {
        expect(screen.getByText('0')).toBeInTheDocument()
        expect(screen.getByTestId('count')).toBeInTheDocument()
        expect(screen.getByTestId('count')).toHaveTextContent('0')
    })
    
    test('deverá acrescentar 1 quando o botão Add for clicado', () => {  
        expect(screen.getByTestId('add')).toBeInTheDocument()
    
        fireEvent.click(screen.getByTestId('add'))
    
        expect (screen.getByTestId('count')).toHaveTextContent('1')
    })
    
    test('deverá diminuir 1 quando o botão Subtract for clicado', () => {
        expect(screen.getByTestId('subtract')).toBeInTheDocument()
    
        fireEvent.click(screen.getByTestId('subtract'))
    
        expect (screen.getByTestId('count')).toHaveTextContent('-1')
    })
})




//teste1 - testar se o count está iniciando no 0
//teste2 - o que acontece quando a usuária clica no botão Add uma vez
//teste3 - quando a usuária clica no botão Subtract aparece -1 ou 0

//fases do teste:
// 01 - renderiza o elemento
// 02 - encontra os elementos
// 03 - interage com o elemento
// 04 - afirma o resultado