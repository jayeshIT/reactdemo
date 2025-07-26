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

  const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const [tasks, setTasks] = React.useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      alert("Please enter a valid task");
      return;
    }
    if (tasks.includes(inputValue)) {
      alert(inputValue + " already exists");
      setInputValue("");
      return;
    }

    setTasks((prevTask) => [...prevTask, inputValue]);
    setInputValue(""); // Clear the input field after adding the task
  };
  const handleDeleteAll = () => {
    if (tasks.length === 0) {
      alert("No tasks to delete");
      return;
    }
    setTasks([]);
  };
  const handleSingleDelete = (index) => {
    console.log("Deleting task at index:", index);
    if (tasks.length > 0) {
      tasks.splice(index, 1);
      setTasks([...tasks]); // Update the state to trigger re-render
    }
  };
  const handleStrikeOut = () => {};
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
              value={inputValue}
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
            ? tasks.map((task, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor: "grey",
                    display: "flex",
                    padding: 8,
                    margin: 6,
                    alignItems: "left",
                    gap: 10,
                  }}
                >
                  <span style={{ textAlign: "right" }}>{task}</span>
                  <button
                    onClick={handleStrikeOut}
                    style={{ backgroundColor: "green" }}
                  >
                    <MdCheck></MdCheck>
                  </button>
                  <button onClickCapture={() => handleSingleDelete(index)}>
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
