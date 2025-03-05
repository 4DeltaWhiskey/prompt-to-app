import React from 'react'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Time Tracker" className="h-8 mr-2" />
          <h1 className="text-2xl font-bold">Time Tracker</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Dashboard</a></li>
            <li><a href="#" className="hover:underline">Reports</a></li>
            <li><a href="#" className="hover:underline">Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header