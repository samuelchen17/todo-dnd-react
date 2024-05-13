import Header from "./Header";
import Task from "./Task";
import { useDrop } from "react-dnd";

export default function Section({
  status,
  todos,
  setTodos,
  incomplete,
  inProgress,
  completed,
  notifyError,
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    // console.log("dropped", id, status);
    setTodos((prev) => {
      //   console.log("prev", prev);
      const modifiedTodos = prev.map((t) => {
        if (t.id === id) {
          return { ...t, status: status };
        }
        return t;
      });

      localStorage.setItem("todos", JSON.stringify(modifiedTodos));

      return modifiedTodos;
    });
  };

  let text;
  let bg;
  let tasksToMap;

  if (status === "incomplete") {
    text = "Incomplete";
    bg = "bg-blue-800";
    tasksToMap = incomplete;
  } else if (status === "inProgress") {
    text = "In Progress";
    bg = "bg-purple-800";
    tasksToMap = inProgress;
  } else if (status === "completed") {
    text = "Completed";
    bg = "bg-green-800";
    tasksToMap = completed;
  }

  return (
    <div
      ref={drop}
      className={`w-64 rounded-md p-2 ${isOver ? "bg-blue-400" : ""}`}
    >
      <Header text={text} background={bg} count={tasksToMap.length}></Header>
      {tasksToMap.length > 0 &&
        tasksToMap.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            notifyError={notifyError}
          />
        ))}
    </div>
  );
}
