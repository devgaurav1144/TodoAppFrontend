import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UpdateTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  // safe initial state so inputs are always controlled
  const [taskData, setTaskData] = useState({ title: "", description: "", _id: "" });
  const [loading, setLoading] = useState(false);

  // IMPORTANT: add dependency array so fetch runs only when `id` changes
  useEffect(() => {
    if (!id) return;
    // let mounted = true;

    const getTask = async () => {
      try {
        const res = await fetch(`http://localhost:8989/tasks/${id}`);
        const data = await res.json();
        if (data?.result) {
          setTaskData({
            title: data.result.title || "",
            description: data.result.description || "",
            _id: data.result._id || id,
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    getTask();
    // return () => {
    //   mounted = false; // avoid setState on unmounted
    // };
  }, [id]); 
  // <-- run only when id changes

  // update handler (called on button click)
  const updateTaskHandle = async () => {
    if (!taskData._id) return alert("Invalid id");
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8989/updateTask/${taskData._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: taskData.title,
          description: taskData.description,
        }),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        alert(result.message);
        navigate("/");
      } else {
        alert(result.message || "Update failed");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Update Task</h1>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Enter Task Title"
        value={taskData.title}
        onChange={(e) => setTaskData((prev) => ({ ...prev, title: e.target.value }))}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows={4}
        placeholder="Enter Task Description"
        value={taskData.description}
        onChange={(e) => setTaskData((prev) => ({ ...prev, description: e.target.value }))}
      />

      <button className="submit" onClick={updateTaskHandle} disabled={loading}>
        {loading ? "Updating..." : "Update Task"}
      </button>
    </div>
  );
}
