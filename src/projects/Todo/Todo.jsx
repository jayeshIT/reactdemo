import useState, { useEffect } from "react";
import React from "react";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
export const Todo = () => {
  const [dateTime, setDateTime] = React.useState();
  useEffect(() => {
    var setInterVal = setInterval(() => {
      const todayDate = new Date();
      const formattedDate = todayDate.toLocaleDateString();
      const formattedTime = todayDate.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => {
      clearInterval(setInterVal);
    };
  }, []);

  const [inputValue, setInputValue] = React.useState({});
  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };
  const [tasks, setTasks] = React.useState([]);

  const handleFormSubmit = () => {
    const { id, content, checked } = inputValue;
    const hasentru = tasks.find((task) => task.content === content);

    if (hasentru) {
      alert(inputValue.content + " already exists");
      setInputValue({ id: "", content: "", checked: "" });
      return;
    }

    setTasks((prevTask) => [...prevTask, { id, content, checked }]);
    setInputValue({ id: "", content: "", checked: "" });
  };
  const handleDeleteAll = () => {
    if (tasks.length === 0) {
      alert("No tasks to delete");
      return;
    }
    setTasks([]);
  };
  const handleSingleDelete = (id) => {
    console.log("Deleting task at index:", id);
    let indx = tasks.findIndex((task) => task.id === id);
    if (indx > -1) {
      tasks.splice(indx, 1);
      setTasks([...tasks]);
      return;
    }
  };
  const handleStrikeOut = (task) => {
    const b = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, checked: !t.checked };
      }
      return t;
    });
    setTasks(b);
  };
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <h2>{dateTime}</h2>
        </header>
      </section>
      <section
        style={{
          border: "1 solid grey",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div>
          <form onSubmit={handleFormSubmit}>
            <input
              onChange={(event) => handleInputChange(event.target.value)}
              value={inputValue.content}
              type="text"
              placeholder="Add a new task"
              autoComplete="off"
            />
          </form>
        </div>
        <div>
          <button
            onClick={handleFormSubmit}
            type="submit"
            style={{ backgroundColor: "blue" }}
          >
            Add Task
          </button>
        </div>
      </section>

      <section className="todo-list">
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            listStyleType: "none",
            padding: 1,
            margin: 5,
          }}
        >
          {tasks.length > 0
            ? tasks.map((task) => (
                <li key={task.id}>
                  <span
                    className={task.checked ? "strikeoutclass" : "notstrikeout"}
                  >
                    {task.content}
                  </span>
                  <button style={{ backgroundColor: "green" }}>
                    <MdCheck
                      onClickCapture={() => handleStrikeOut(task)}
                    ></MdCheck>
                  </button>
                  <button onClickCapture={() => handleSingleDelete(task.id)}>
                    <MdDeleteForever></MdDeleteForever>
                  </button>
                </li>
              ))
            : null}
        </ul>
      </section>
      <button onClick={handleDeleteAll} style={{ margin: 10 }}>
        Clear All
      </button>
    </>
  );
};
