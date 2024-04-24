import { useEffect, useState } from "react";
import CreateTodos from "./components/CreateTodos";
import ListTodos from "./components/ListTodos";

function App() {
  const [todos, setTodos] = useState([]);

  // grab the information from local storage so the state has access to it
  // change from JSON string to JS object
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  console.log("todo", todos);

  return (
    <>
      <div className="bg-blue-300 w-screen h-screen flex flex-col items-center gap-16 pt-32">
        <CreateTodos todos={todos} setTodos={setTodos} />
        <div>
          <ListTodos
            className="flex flex-col items-left"
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </>
  );
}

export default App;
