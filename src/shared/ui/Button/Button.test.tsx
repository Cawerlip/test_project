import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import React from 'react'

describe('Button', () => {
  test('Test render', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
  test('Test render clear', () => {
    render(<Button variant='clear'>test</Button>)
    expect(screen.getByText('test')).toHaveClass('clear')
    screen.debug()
  })
})