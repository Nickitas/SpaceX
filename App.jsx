import React from 'react'
import Nav from './components/Nav/Nav'
import Dashboard from './components/Dashboard/Dashboard'
import ButtonAndRocket from './components/ButtonAndRocket/ButtonAndRocket'
import { navList } from './staticsData'

const App = () => {
  return (
    <main className='App'>
      <Nav data={navList} />
      <Dashboard />
      <ButtonAndRocket />
    </main>
  )
}

export default App