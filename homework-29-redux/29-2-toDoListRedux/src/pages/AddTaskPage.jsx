import ToDoForm from '../components/ToDoForm'
import { addTask } from "../store/store";
import { useDispatch } from "react-redux";

export default function AddTask() {
  const dispatch = useDispatch();
  
  const handleAddTask = (taskText) => {
    dispatch(addTask(taskText));
  };
  return (
    <>
      <div>AddTask</div>
      <ToDoForm onAddTask={handleAddTask} />
    </>
    
  )
}
