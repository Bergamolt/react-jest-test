import { useEffect, useState } from 'react'

import List from './components/list'
import Search from './components/search'

const data = [
  'html',
  'css',
  'js'
]

function App() {
  const [ search, setSearch ] = useState('')

  const [ items, setItems ] = useState(data)

  useEffect(() => {
    setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())))
  }, [ search ])

  const onChangeSearch = (event) => {
    const value = event.target.value

    setSearch(value)
  }

  return (
    <div className="App">
      <List items={ items }/>
      <Search value={ search } onChange={ onChangeSearch }>
        Find
      </Search>
    </div>
  )
}

export default App
