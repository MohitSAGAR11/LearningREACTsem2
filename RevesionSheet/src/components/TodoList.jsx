import React , {useState} from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const addTask = ()=>{
        if(taskInput.trim() !== ""){
            setTasks([...tasks, taskInput]);
            setTaskInput("");
        }
    }


    const removeTask = (index) => {
        setTasks(tasks.filter((_,i) => i !== index));
    }

    return (
        <div>
            <input
            type='text'
            placeholder='Enter task'
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {
                    tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={() => removeTask(index)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;