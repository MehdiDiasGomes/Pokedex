import React from 'react'
import Card from '../Components/Card'
import { useState } from 'react'
import ListPokemon from '../Components/ListPokemon'

export default function Body() {

  let cards = []

  for (let i = 0; i < 300; i++) {
    cards.push(<Card key={i} />)
  }

  //Pagination

  const items = 50
  const [current, setCurrent] = useState(1)
  const nbPage = Math.ceil(cards.length / items)

  const startIndex = (current - 1) * items
  const endIndex = startIndex + items

  const dataPerPage = cards.slice(startIndex, endIndex)

  return (
    <div className="mb-24 flex flex-col gap-5">
      <div className="">
        <ListPokemon />
      </div>

      <div className="flex justify-center gap-5">
        {Array.from({ length: nbPage }, (_, i) => i + 1).map(page => {
          return (
            <button
              onClick={() => setCurrent(page)}
              className={`border-2 border-white w-10 h-10 duration-300 ${
                current === page
                  ? 'text-black bg-white'
                  : 'text-white bg-transparent'
              } hover:bg-white hover:text-black`}>
              {page}
            </button>
          )
        })}
      </div>
    </div>
  )
}
