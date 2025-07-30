import { screen } from '@testing-library/react'
import { Counter } from './Counter'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  test('Test render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } }, })
    expect(screen.getByTestId('counterValue')).toHaveTextContent('10')
  })
  test('increment', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } }, })
    userEvent.click(screen.getByTestId('incrementButton'))
    expect(screen.getByTestId('counterValue')).toHaveTextContent('11')
  })
  test('decrement', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } }, })
    userEvent.click(screen.getByTestId('decrementButton'))
    expect(screen.getByTestId('counterValue')).toHaveTextContent('9')
  })

})