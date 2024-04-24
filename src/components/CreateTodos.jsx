import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

export default function CreateTodos({ todos, setTodos }) {
  const [todo, setTodo] = useState({
    id: "",
    name: "",
    status: "incomplete", // Can also be inprogress or closed
  });

  console.log(todo);

  const handleSubmit = (event) => {
    event.preventDefault(); // stops page from refresh when submitting

    // Prevent empty string from being added to todos
    if (todo.name.length < 3) {
      notifyError({ message: "A Todo must be more than three characters" });
      return;
    }
    if (todo.name.length > 100) {
      notifyError({ message: "A Todo must have less than 100 characters" });
      return;
    }

    setTodos((prevTodo) => {
      const list = [...prevTodo, todo];

      localStorage.setItem("todos", JSON.stringify(list)); // store in local storage

      return list;
    });

    notifySuccess({ message: "Todo created" });

    // clear input field after submit
    setTodo({
      id: "",
      name: "",
      status: "incomplete",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1.5"
        value={todo.name} // value for input but also linked to state
        onChange={(event) =>
          setTodo({ ...todo, id: uuidv4(), name: event.target.value })
        }
      />
      <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">
        Create
      </button>
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
    </form>
  );
}
