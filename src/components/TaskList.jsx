import React, { useState } from 'react'

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Write blog post', duration: 120 },
    { id: 2, name: 'Design website', duration: 240 },
    { id: 3, name: 'Attend meeting', duration: 60 },
  ])

  const [newTaskName, setNewTaskName] = useState('')
  const [newTaskDuration, setNewTaskDuration] = useState(0)

  const handleAddTask = () => {
    if (newTaskName.trim() !== '' && newTaskDuration > 0) {
      setTasks([...tasks, { id: tasks.length + 1, name: newTaskName, duration: newTaskDuration }])
      setNewTaskName('')
      setNewTaskDuration(0)
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <ul className="space-y-4">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center justify-between">
            <div>
              <h3 className="font-bold">{task.name}</h3>
              <p className="text-gray-500">{new Date(task.duration * 1000).toISOString().substr(11, 8)}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Start</button>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Task name"
          value={newTaskName}
          onChange={e => setNewTaskName(e.target.value)}
          className="border-gray-300 rounded-lg py-2 px-4 mr-2 w-full mb-2"
        />
        <input
          type="number"
          placeholder="Duration (seconds)"
          value={newTaskDuration}
          onChange={e => setNewTaskDuration(parseInt(e.target.value))}
          className="border-gray-300 rounded-lg py-2 px-4 mr-2 w-full mb-2"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  )
}

export default TaskList