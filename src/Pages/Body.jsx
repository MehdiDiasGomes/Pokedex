import React from 'react'
import Card from '../Components/Card'
import { useState } from 'react'
import { data } from 'autoprefixer'

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
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center mb-24">
      <div className="flex justify-center items-center gap-5 p-10 bg-bodyColor w-[65%] flex-wrap rounded-lg">
        {dataPerPage}
      </div>

      <div className="flex justify-center gap-5">
        {Array.from({ length: nbPage }, (_, i) => i + 1).map(page => {
          return <button onClick={() => setCurrent(page)} className="text-white border-2 border-white w-10 h-10 duration-300 hover:bg-white hover:text-black">{page}</button>
        })}
      </div>
    </div>
  )
}
