import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../store/store";

export default function ListPage() {
  const tasks = useSelector(state => state.tasks);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Список завдань</h2>
      {tasks.length === 0 ? (
        <p>Завдань поки немає</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <li 
              key={task.id} 
              style={{ 
                padding: '10px', 
                marginBottom: '10px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: task.completed ? '#e8f5e9' : 'white'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                  type="checkbox" 
                  checked={task.completed}
                  onChange={() => dispatch(toggleTask(task.id))}
                  style={{ cursor: 'pointer' }}
                />
                <span style={{ 
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#888' : 'black'
                }}>
                  {task.text}
                </span>
              </div>
              <button 
                onClick={() => dispatch(deleteTask(task.id))}
                style={{ 
                  padding: '5px 10px', 
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
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