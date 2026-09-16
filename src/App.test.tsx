import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Get started' }),
    ).not.toBeInTheDocument()
  })

  it('starts the counter at zero', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })

  it('increments the counter on each click', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button', { name: /count is/i })
    await user.click(button)
    expect(button).toHaveTextContent('Count is 1')

    await user.click(button)
    expect(button).toHaveTextContent('Count is 2')
  })

  it('links to the Vite and React docs', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /explore vite/i })).toHaveAttribute(
      'href',
      'https://vite.dev/',
    )
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute(
      'href',
      'https://react.dev/',
    )
  })
})
