import React from 'react'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import SideChat from './components/SideChat'

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col">
        <TopBar />
        <div className="flex h-screen">
        <Hero />
        <SideChat />
        </div>
      </div>
    </div>
  )
}

export default App