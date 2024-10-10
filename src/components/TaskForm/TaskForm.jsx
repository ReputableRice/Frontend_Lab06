// import { tasks } from "../../inventory/tasks"
import { useState } from 'react'

export default function TaskForm({ addTask }) {
    const [newTask, setNewTask] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if (newTask === "") {
            console.log("empty task")
        } else {
            addTask(newTask)
        }
        setNewTask('')
    }

    return (
        <>
            <form className="formContainer" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="inputText"
                    placeholder="new task ..."
                    value={newTask}
                    onChange={(e) => {
                        setNewTask(e.target.value)
                    }}
                />
                <button className="btnSubmit" type='submit'>Save</button>
            </form>
        </>
    )
}