import Header from "./Header";
import Task from "./Task";

export default function Section({
  status,
  todos,
  setTodos,
  incomplete,
  inProgress,
  completed,
  notifyError,
}) {
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
    <div className={`w-64 `}>
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
