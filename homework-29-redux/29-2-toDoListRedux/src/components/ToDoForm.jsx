import { useFormik } from "formik";

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
    <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
      <input 
        type="text" 
        name="task" 
        placeholder="Введіть ваше завдання" 
        value={formik.values.task}
        onChange={formik.handleChange}
        style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <button 
        type="submit"
        style={{ 
          padding: '10px', 
          backgroundColor: '#28a745', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Додати завдання
      </button>
    </form>
  );
}