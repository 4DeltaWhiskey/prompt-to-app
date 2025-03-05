import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

function ForecastChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Projected Hours',
        data: [120, 150, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Time Tracking Forecast',
      },
    },
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const ForecastChart = ({ forecastData }) => {
  // Prepare data for the chart
  const data = {
    labels: forecastData.map(entry => entry.date),
    datasets: [
      {
        label: 'Forecasted Hours',
        data: forecastData.map(entry => entry.hours),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      }
    ]
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Hours'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Time Forecast'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.parsed.y} hours`
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false
  }

  return (
    <div style={{ height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  )
}
      <Line data={data} options={options} />
    </div>
  )
}

export default ForecastChart
