import { render, screen, waitFor } from '@testing-library/react'
import Button from '../Button'

describe('[component]: Button', () => {
  test('should render primary button with light theme', async () => {
    render(<Button primary theme="light" label="Test 2" />)
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      '--button-bg-primary': '#1ea7fd',
      '--button-text-primary': 'rgb(235, 235, 235)'
    })
  })

  test('should render primary button with receive dark theme', async () => {
    render(<Button primary theme="dark" label="Test 2" />)
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      '--button-bg-primary':'#2e2c2c',
      '--button-text-primary': 'white',
    })
  })

  test('should fullWidth input equal to full width of css', () => {
    render(<Button primary theme="light" fullWidth label="Test 2" />)

    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      width: '100%'
    })
  })
})