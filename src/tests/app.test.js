import { render, screen } from '@testing-library/react'

import App from '../app'

describe('App component', () => {
  it('App render', () => {
    render(<App/>)

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('App dinamic shange', () => {
    render(<App/>)

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})