import { useEffect, useState } from "react";
import CreateTodos from "./components/CreateTodos";
import ListTodos from "./components/ListTodos";

// toast
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast notify message
const notifySuccess = ({ message }) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

const notifyError = ({ message }) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

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
        <CreateTodos
          todos={todos}
          setTodos={setTodos}
          notifySuccess={notifySuccess}
          notifyError={notifyError}
        />
        <div>
          <ListTodos
            className="flex flex-col items-left"
            todos={todos}
            setTodos={setTodos}
            notifySuccess={notifySuccess}
            notifyError={notifyError}
          />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition:Bounce
      />
    </>
  );
}

export default App;
