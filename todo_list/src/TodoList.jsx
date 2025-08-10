import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    {
      task: "sample-task",
      id: uuidv4(),
      isdone: false,
    },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (!newTodo.trim()) {
      return;
    }
    // setTodos([...todos, {task: newTodo, id: uuidv4()}]);

    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isdone: false }];
    });

    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isdone: !todo.isdone,
        };
      })
    );
  };

  let lowerCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toLowerCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isdone: !todo.isdone, // toggle done
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br></br>
      <br></br>
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <hr></hr>
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={
                todo.isdone
                  ? { color: "red", textDecoration: "line-through" }
                  : {}
              }
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
            &nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}>
              {todo.isdone ? "Undo" : "Mark as done"}
            </button>
            <br />
            <br />
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={markAllDone}>Mark all as done</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={lowerCaseAll}>LowerCase All</button>
    </div>
  );
}
