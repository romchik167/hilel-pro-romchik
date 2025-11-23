import { useFormik } from "formik";
import styles from './ToDoForm.module.css';

export default function ToDoForm({ onAddTask }) {
  
  const formik = useFormik({
    initialValues: {
      task: '',
    },
    onSubmit: (values, { resetForm }) => {
      if (values.task.trim()) {
        onAddTask(values.task);
        resetForm();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <input 
        type="text" 
        name="task" 
        placeholder="Введіть ваше завдання" 
        value={formik.values.task}
        onChange={formik.handleChange}
        className={styles.input}
      />
      <button 
        type="submit"
        className={styles.submitButton}
      >
        Додати завдання
      </button>
    </form>
  );
}