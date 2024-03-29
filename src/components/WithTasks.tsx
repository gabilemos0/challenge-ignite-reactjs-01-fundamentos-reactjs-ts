import styles from "./WithTasks.module.css";

import { Circle, CheckCircle, Trash } from "phosphor-react";

interface TasksProps {
  id: string;
  title: string;
  isDone: boolean;
  onDeleteTask: (id: string) => void;
  onCheckedTask: (id: string) => void;
}

export function WithTasks({ id, title, isDone, onDeleteTask, onCheckedTask }: TasksProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCheckedTask() {
    onCheckedTask(id);
  }

  return (
    <div className={styles.withTasks}>
      {isDone ? (
        <button onClick={handleCheckedTask} className={styles.checked}>
          <CheckCircle size={24} weight="fill" />
        </button>
      ) : (
        <button onClick={handleCheckedTask} className={styles.unchecked}>
          <Circle size={24} />
        </button>
      )}

      <span>{title}</span>

      <button
        onClick={handleDeleteTask}
        title="Deletar Task"
        className={styles.trash}
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
