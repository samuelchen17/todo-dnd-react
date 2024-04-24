import { useEffect, useState } from "react";
import Section from "./Section";

export default function ListTodos({ todos, setTodos }) {
  const [incomplete, setIncomplete] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    // f = filter
    const fIncomplete = todos.filter((todo) => todo.status === "incomplete");
    const fInProgress = todos.filter((todo) => todo.status === "inProgress");
    const fCompleted = todos.filter((todo) => todo.status === "completed");

    setIncomplete(fIncomplete);
    setInProgress(fInProgress);
    setCompleted(fCompleted);
  }, [todos]);

  const statuses = ["incomplete", "inProgress", "completed"];

  return (
    <div className="flex gap-16 ">
      {/* Goes through statuses and creates a Section for each */}
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          todos={todos}
          setTodos={setTodos}
          incomplete={incomplete}
          inProgress={inProgress}
          completed={completed}
        />
      ))}
    </div>
  );
}
