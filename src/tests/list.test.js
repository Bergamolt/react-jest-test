import { render, screen } from '@testing-library/react'

import List from '../components/list'

describe('List component', () => {
  it('List render with data', () => {
    const data = [ 'html', 'css', 'js' ]

    render(<List items={ data }/>)

    expect(screen.getByText('html')).toBeInTheDocument()
    expect(screen.getByText('css')).toBeInTheDocument()
    expect(screen.getByText('js')).toBeInTheDocument()
  })

  it('List render without data', () => {
    render(<List/>)

    expect(screen.queryByRole('list')).toBeNull()
  })

  it('List snapshot with data', () => {
    const data = [ 'html', 'css', 'js' ]

    const list = render(<List items={ data }/>)

    expect(list).toMatchSnapshot()
  })

  it('List snapshot without data', () => {
    const list = render(<List/>)

    expect(list).toMatchSnapshot()
  })
})