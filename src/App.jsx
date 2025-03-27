import React from 'react'
import './App.css'
import Header from './Components/Header'
import Content from './Components/Content'
import Navigation from './Components/Navigation'

function App() {

  return (
    <> 
     <Navigation/>
    <div className='body max-w-[85%] m-auto flex  justify-between'>
      <Header/>
      <Content/>
    </div>
    </>
   
  )
}

export default App
