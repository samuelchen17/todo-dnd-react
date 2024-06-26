// This component is the individual boxes containing the todo

import { useDrag } from "react-dnd";

export default function Task({ todo, todos, setTodos, notifyError }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todo",
    item: { id: todo.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  //   console.log(isDragging);

  // Create a new array where the id in question is removed
  function handleDelete(id) {
    // receive todo at a time and return that todo.id that does not equal to id
    // all tasks that are does not have the same id will be stored in filteredTodos
    const filteredTodos = todos.filter((t) => t.id !== id);
    // Update local storage
    localStorage.setItem("todos", JSON.stringify(filteredTodos));

    setTodos(filteredTodos);
    notifyError({ message: "Todo Deleted" });
  }
  return (
    <div
      ref={drag}
      className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab bg-white ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <p>{todo.name}</p>
      <button
        className={`absolute bottom-1 right-1 text-black`}
        onClick={() => handleDelete(todo.id)}
      >
        {/* icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}
