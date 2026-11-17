import { Icon } from '@iconify/react'
import React, { useState } from 'react'

function Todo() {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    function addTask() {
        if (task.trim() === "") {
            return
        }


        setTasks([...tasks, {
            id: Date.now(),
            text: task,
            completed: false

        }])
        setTask("")
    }

    function deleteTask(id) {
        setTasks(tasks.filter((item) => item.id !== id))
    }

    function completeTask(id) {
        setTasks(
            tasks.map((item) =>
                item.id === id
                    ? { ...item, completed: !item.completed }
                    : item
            )
        )

    }
    return (
        <div className="main">
            <div className='section'>

                <h1> <span> <Icon  icon={"akar-icons:circle-check-fill"}/> </span>  My Todo List </h1>
                <div className="input">
                    <input
                        type="text"
                        placeholder='Enter tasks...'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />

                    <button onClick={addTask}>Add task</button>
                </div>

                {tasks.length === 0 && <p>No tasks yet!</p>}

                <div className="list">

                    {tasks.map((item) => (
                        <div key={item.id}>
                            <span onClick={() => completeTask(item.id)}
                                style={{
                                    textDecoration: item.completed
                                        ? "line-through"
                                        : "none",
                                    cursor: 'pointer'
                                }}>{item.text}</span>

                            <button onClick={() => deleteTask(item.id)}> <Icon icon={"at-icons:trash-can"} /> </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Todo
