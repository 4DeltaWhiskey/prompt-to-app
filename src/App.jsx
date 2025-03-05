import React from 'react'
import Header from './components/Header'
import Timer from './components/Timer'
import TaskList from './components/TaskList'
import TaskDetails from './components/TaskDetails'
import ForecastChart from './components/ForecastChart'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-8">
        <Timer />
        <TaskList />
        <TaskDetails />
        <ForecastChart />
      </div>
      <Footer />
    </div>
  )
}

export default App