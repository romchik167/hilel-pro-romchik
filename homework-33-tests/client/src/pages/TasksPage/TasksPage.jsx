import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './TasksPage.css';
import TaskCard from '../../components/TaskCard/TaskCard';
import { getTasksAsync, deleteTaskAsync } from '../../store/features/tasks';
import { getProjectsAsync } from '../../store/features/projects';

export default function TasksPage() {
  const { data: tasks } = useSelector(state => state.tasks);
  const { data: projects } = useSelector(state => state.projects);
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filterName, setFilterName] = useState('');
  const [sortBy, setSortBy] = useState('priority');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    dispatch(getProjectsAsync());
    dispatch(getTasksAsync(projectId));
  }, [dispatch, projectId]);

  const filteredTasks = tasks.filter(task => {
    return task.title.toLowerCase().includes(filterName.toLowerCase()) ||
           task.description.toLowerCase().includes(filterName.toLowerCase());
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];

    // Handle priority sorting
    if (sortBy === 'priority') {
      const priorityOrder = { HIGH: 3, MEDIUM: 2, LOW: 1 };
      aValue = priorityOrder[aValue] || 0;
      bValue = priorityOrder[bValue] || 0;
    }

    // Handle status sorting
    if (sortBy === 'status') {
      const statusOrder = { 'in-progress': 3, 'todo': 2, 'blocked': 1, 'done': 4 };
      aValue = statusOrder[aValue] || 0;
      bValue = statusOrder[bValue] || 0;
    }

    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleDeleteTask = (taskId) => {
    if (confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTaskAsync(taskId));
    }
  };

  const handleAddTask = () => {
    navigate(`/tasks/new/${projectId}`);
  };

  const currentProject = projects.find(p => p.id === projectId);

  return (
    <div className='TasksPage'>
      <div className='TasksHeader'>
        <div className='TasksTitle'>
          <button className='BackButton' onClick={() => navigate('/projects')}>←</button>
          <h1>{currentProject ? `${currentProject.title} - Tasks` : 'Tasks'}</h1>
        </div>
        <button className='AddTaskButton' onClick={handleAddTask}>+ Add Task</button>
      </div>

      <div className='TasksControls'>
        <div className='FilterSection'>
          <input
            type='text'
            placeholder='Filter by name or description...'
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            className='FilterInput'
          />
        </div>

        <div className='SortSection'>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className='SortSelect'>
            <option value='priority'>Sort by Priority</option>
            <option value='status'>Sort by Status</option>
            <option value='title'>Sort by Title</option>
            <option value='assignee'>Sort by Assignee</option>
          </select>

          <button
            className={`SortOrder ${sortOrder}`}
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>

      <div className='Tasks'>
        {sortedTasks.length === 0 && <span className='NoTasks'>No tasks available</span>}
        {sortedTasks.map(task => (
          <TaskCard 
            key={task.id} 
            {...task} 
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}