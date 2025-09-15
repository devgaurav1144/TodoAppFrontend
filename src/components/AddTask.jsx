import "../styles/addtask.css"
import { useState } from "react";
export default function AddTask() {

    const [taskData, setTaskData] = useState();

    const handleAddTask = async (req, res) => {
        console.log(taskData)

        let data = await fetch("http://localhost:8989/addTask", {
            method: "Post",
            body: JSON.stringify(taskData),
            headers: {
                'Content-Type': 'Application/Json'
            }
        })
        let result = await data.json();

        if (result.success) {
            alert(result.message); // show popup alert
            console.log(result.message);
        }
    }

    return (
        <div className="container">
            <h1>Add New Task</h1>
            <label htmlFor="">Title</label>
            <input onChange={(event) => setTaskData({ ...taskData, title: event.target.value })} type="text" name="title" id="title" placeholder="Enter Task Title" />
            <label htmlFor="">Description</label>
            <textarea onChange={(event) => setTaskData({ ...taskData, description: event.target.value })} rows={4} name="description" id="description" placeholder="Enter Task Description"></textarea>
            <button className="submit" onClick={handleAddTask}>Add New Task</button>
        </div>
    )
}