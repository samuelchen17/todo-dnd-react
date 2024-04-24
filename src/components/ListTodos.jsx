import { useEffect, useState } from "react";

export default function ListTodos({ todos, setTodos }) {
  const [incomplete, setIncomplete] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    // f = filter
    const fIncomplete = todos.filter((todo) => todo.status === incomplete);
    const fInProgress = todos.filter((todo) => todo.status === inProgress);
    const fCompleted = todos.filter((todo) => todo.status === completed);

    setIncomplete(fIncomplete);
    setInProgress(fInProgress);
    setCompleted(fCompleted);
  }, [todos]);

  return (
    <>
      <p>List</p>
    </>
  );
}
