import { Fragment, useEffect, useState } from "react"
import '../styles/list.css'
import { Link, useNavigate } from "react-router-dom";

export default function ListTask() {

    const [listData, setListData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getAllTaskList()
    }, [])

    const getAllTaskList = async () => {
        let list = await fetch("http://localhost:8989/tasks")
        list = await list.json();
        if (list.success) {
            console.log(list.success)
            setListData(list.result)
        }
    }

    const deleteTask = async (id) => {
        let item = await fetch("http://localhost:8989/delete/" + id, { method: "delete" })
        item = await item.json();
        if (item.success) {
            console.log(item.success);
            alert("Item Deleted Successfully");
            getAllTaskList();
            navigate("/");
        }
    }

    return (
        <div className="main-div">
            <h1 className="header-text">Task list View</h1>
            <ul className="task-list">
                <li className="list-header">S.No</li>
                <li className="list-header">Task</li>
                <li className="list-header">Description</li>
                <li className="list-header">Action</li>
                {
                    listData && listData.map((item, index) => (
                        <Fragment key={item._id}>
                            <li className="list-item">{index + 1}</li>
                            <li className="list-item">{item.title}</li>
                            <li className="list-item">{item.description}</li>
                            <li className="list-item">
                                <button className="delete-item" onClick={() => deleteTask(item._id)}>Delete</button>
                                <Link to={"update/"+item._id} className="update-item">Update</Link>                            
                                </li>                      
                        </Fragment>
                    ))
                }
            </ul>
        </div>

        //    <table border="1">
        //         <thead>
        //             <tr>
        //                 <th>S.No</th>
        //                 <th>Task</th>
        //                 <th>Description</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {listData.map((item, index) => (
        //                 <tr key={item.id || index}>
        //                     <td>{index + 1}</td>
        //                     <td>{item.title}</td>
        //                     <td>{item.description}</td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
    )
}