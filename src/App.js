import "./App.css";
import { useState } from "react";
import todolistIcon from "./images/icon.png";
import InputBox from "./components/inputs/input-box.componet";
import Button from "./components/button/button.component";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() === "") {
      alert("You must write something!");
      return;
    }

    const newTask = { text: inputValue, id: Date.now(), checked: false };
    setTaskList([...taskList, newTask]);
    setInputValue("");
  };

  const toggleTaskChecked = (id) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const removeTask = (id) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== id)
    );
  };

  return (
    <div className="App">
      <div className="todo-app">
        <h2>
          To-Do List <img src={todolistIcon} alt="todo Icon" />
        </h2>

        <div className="row">
          <InputBox
            className="input-box"
            placeholder="Enter your checklist items"
            value={inputValue}
            onChange={handleInputChange}
          />

          <Button addTask={addTask} className="Button" label={"Button"} />
        </div>

        <ul className="list-container">
          {taskList.map((task) => (
            <li
              key={task.id}
              onClick={() => toggleTaskChecked(task.id)}
              className={task.checked ? "checked-task" : ""}
            >
              {task.text}

              <button className="span" onClick={() => removeTask(task.id)}>
                ✗
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
