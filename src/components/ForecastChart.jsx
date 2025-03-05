import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js/auto'

Chart.register(LineController, LineElement, PointElement, LinearScale, Title)

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
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <Line data={data} options={options} />
    </div>
  )
}

export default ForecastChart