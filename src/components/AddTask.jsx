import "../styles/addtask.css"

export default function AddTask(){
    return(
        <div className="container">
            <h1>Add New Task</h1>
            <form>
                <label htmlFor="">Title</label>
                <input type="text" name="title" id="title" placeholder="Enter Task Title" />
                <label htmlFor="">Description</label>
                <textarea rows={4} name="description" id="description" placeholder="Enter Task Description"></textarea>
                <button className="submit">Add New Task</button>
            </form>
        </div>
    )
}