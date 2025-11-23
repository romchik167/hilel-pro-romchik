import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../store/store";
import styles from './ListPage.module.css';

export default function ListPage() {
  const tasks = useSelector(state => state.tasks);

  const dispatch = useDispatch();
  return (
    <div className={styles.listContainer}>
      <h2 className={styles.listTitle}>Список завдань</h2>
      {tasks.length === 0 ? (
        <p className={styles.emptyMessage}>Завдань поки немає</p>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li 
              key={task.id} 
              className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}
            >
              <div className={styles.taskContent}>
                <input 
                  type="checkbox" 
                  checked={task.completed}
                  onChange={() => dispatch(toggleTask(task.id))}
                  className={styles.taskCheckbox}
                />
                <span className={`${styles.taskText} ${task.completed ? styles.completed : ''}`}>
                  {task.text}
                </span>
              </div>
              <button 
                onClick={() => dispatch(deleteTask(task.id))}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}