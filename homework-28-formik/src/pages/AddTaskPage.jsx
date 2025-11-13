import React from "react";
import ToDoForm from '../components/ToDoForm'
import TasksContext from '../TasksContext'

export default function AddTask() {
  const { addTask } = React.useContext(TasksContext);
  return (
    <>
      <div>AddTask</div>
      <ToDoForm onAddTask={addTask} />
    </>
    
  )
}
