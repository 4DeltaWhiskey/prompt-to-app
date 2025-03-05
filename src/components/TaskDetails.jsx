import React, { useState } from 'react'

function TaskDetails() {
  const [selectedTask, setSelectedTask] = useState(null)

  const handleTaskSelect = (task) => {
    setSelectedTask(task)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Task Details</h2>
      {selectedTask ? (
        <div>
          <h3 className="text-lg font-bold mb-2">{selectedTask.name}</h3>
          <p className="text-gray-500 mb-4">
            Duration: {new Date(selectedTask.duration * 1000).toISOString().substr(11, 8)}
          </p>
          <p className="mb-4">{selectedTask.description}</p>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Select a task to view details.</p>
      )}
    </div>
  )
}

export default TaskDetails