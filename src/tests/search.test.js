import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Search from '../components/search'

const onChange = jest.fn()

describe('Search component', () => {
  it('Search render with children', () => {
    render(
      <Search value="" onChange={ onChange }>
        Find:
      </Search>
    )

    expect(screen.getByText(/find/i)).toBeInTheDocument()
  })

  it('Search render without children', () => {
    render(
      <Search value="" onChange={ onChange }/>
    )

    expect(screen.getByText(/search/i)).toBeInTheDocument()
  })

  it('Search render with placeholder', () => {
    render(
      <Search value="" onChange={ onChange } placeholder="Any placeholder"/>
    )

    expect(screen.getByPlaceholderText(/any placeholder/i)).toBeInTheDocument()
  })

  it('Search render without placeholder', () => {
    render(
      <Search value="" onChange={ onChange }/>
    )

    expect(screen.getByPlaceholderText(/search .../i)).toBeInTheDocument()
  })

  it('onChange fn works', () => {
    render(
      <Search value="" onChange={ onChange }/>
    )

    userEvent.type(screen.getByRole('textbox'), 'Test')

    expect(onChange).toBeCalledTimes(4)
  })
})