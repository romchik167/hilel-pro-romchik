import ToDoForm from '../components/ToDoForm'
import { addTask } from "../store/store";
import { useDispatch } from "react-redux";
import styles from './AddTaskPage.module.css';

export default function AddTask() {
  const dispatch = useDispatch();
  
  const handleAddTask = (taskText) => {
    dispatch(addTask(taskText));
  };
  return (
    <div className={styles.addTaskContainer}>
      <h2 className={styles.addTaskTitle}>Додати завдання</h2>
      <div className={styles.formWrapper}>
        <ToDoForm onAddTask={handleAddTask} />
      </div>
    </div>
  )
}
