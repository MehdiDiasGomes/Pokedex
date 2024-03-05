import { useState } from 'react'
import './App.css'
import Header from './Layout/Header'
import Body from './Pages/Body'

function App() {
  return (
    <div className="flex flex-col gap-5">

      <div>
        <Header />
      </div> 

      <div>
        <Body/>
      </div>

    </div>
  )
}

export default App
