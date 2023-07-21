import React from 'react'
import './App.css'
import Header from './Components/Header'
import Content from './Components/Content'

function App() {

  return (
    <div className='body max-w-[85%] m-auto flex  justify-between'>
      <Header/>
      <Content/>
    </div>
  )
}

export default App
