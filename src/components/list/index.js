import React from 'react'

const List = ({ items = [] }) => {
  if (!items.length) {
    return null
  }

  return (
    <ul>
      {
        items.map((item, index) => (<li key={ index }>{ item }</li>))
      }
    </ul>
  )
}

export default List
