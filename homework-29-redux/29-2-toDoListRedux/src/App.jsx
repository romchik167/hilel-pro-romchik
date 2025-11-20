import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './pages/Menu'
import ListPage from './pages/ListPage'
import Page404 from './pages/Page404'
import AddTaskPage from './pages/AddTaskPage'
import HomePage from './pages/HomePage'
import { useState } from 'react'
import TasksContext from './TasksContext'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      <BrowserRouter>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '20px',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h1 style={{ textAlign: 'center', color: '#333' }}>To Do List</h1>
          <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/list-page' element={<ListPage />} />
            <Route path='/add-task-page' element={<AddTaskPage />}/>
            <Route path='*' element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TasksContext.Provider>
  )
}

export default App
