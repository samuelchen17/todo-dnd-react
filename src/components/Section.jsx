import Header from "./Header";

export default function Section({
  status,
  todos,
  setTodos,
  incomplete,
  inProgress,
  completed,
}) {
  let text = "Todo";
  let bg = "bg-blue-800";
  let tasksToMap = todos;

  if (status === "inprogress") {
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
      <Header text={text} background={bg} count={incomplete.length}></Header>
      list
    </div>
  );
}
