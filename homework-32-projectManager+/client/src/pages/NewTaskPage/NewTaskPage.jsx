import { useEffect, useRef, useState } from 'react';
import './NewTaskPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveTaskAsync, getTasksAsync } from '../../store/features/tasks';
import { useNavigate, useSearchParams, useParams } from 'react-router';

const TASK_STATUSES = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  blocked: 'Blocked',
  done: 'Done'
};

const PRIORITIES = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low'
};

export default function NewTaskPage() {
  const [searchParams] = useSearchParams();
  const { projectId } = useParams();
  const taskId = searchParams.get('id');
  
  const titleRef = useRef();
  const descriptionRef = useRef();
  const priorityRef = useRef();
  const statusRef = useRef();
  const assigneeRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { data: tasks } = useSelector(state => state.tasks);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const currentTask = taskId ? tasks.find(t => t.id === taskId) : null;

  useEffect(() => {
    if (projectId) {
      dispatch(getTasksAsync(projectId));
    }
  }, [projectId, dispatch]);

  useEffect(() => {
    if (currentTask) {
      titleRef.current.value = currentTask.title || '';
      descriptionRef.current.value = currentTask.description || '';
      priorityRef.current.value = currentTask.priority || 'MEDIUM';
      statusRef.current.value = currentTask.status || 'todo';
      assigneeRef.current.value = currentTask.assignee || '';
    }
  }, [currentTask]);

  const handleSave = async () => {
    const title = titleRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    const priority = priorityRef.current.value;
    const status = statusRef.current.value;
    const assignee = assigneeRef.current.value.trim() || 'Unassigned';

    if (!title) {
      alert('Please enter a task title');
      return;
    }

    setIsLoading(true);
    
    const taskData = {
      title,
      description,
      priority,
      status,
      assignee,
      projectId,
    };

    if (taskId) {
      taskData.id = taskId;
    }

    try {
      await dispatch(saveTaskAsync(taskData));
      setIsSaved(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSaved) {
      navigate(`/tasks/${projectId}`);
    }
  }, [navigate, isSaved, projectId]);

  const handleCancel = () => {
    navigate(`/tasks/${projectId}`);
  };

  return (
    <div className='NewTaskPage'>
      <div className='TaskForm'>
        <h1>{taskId ? 'Edit Task' : 'Create New Task'}</h1>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='FormGroup'>
            <label htmlFor='title'>Task Title *</label>
            <input 
              type='text' 
              id='title'
              name='title' 
              placeholder='Enter task title' 
              ref={titleRef}
              className='FormInput'
            />
          </div>

          <div className='FormGroup'>
            <label htmlFor='description'>Description</label>
            <textarea 
              id='description'
              name='description' 
              placeholder='Enter task description' 
              ref={descriptionRef}
              className='FormTextarea'
              rows='5'
            />
          </div>

          <div className='FormRow'>
            <div className='FormGroup'>
              <label htmlFor='priority'>Priority</label>
              <select 
                id='priority'
                name='priority' 
                ref={priorityRef}
                className='FormSelect'
              >
                {Object.entries(PRIORITIES).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>

            <div className='FormGroup'>
              <label htmlFor='status'>Status</label>
              <select 
                id='status'
                name='status' 
                ref={statusRef}
                className='FormSelect'
              >
                {Object.entries(TASK_STATUSES).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
          </div>

          <div className='FormGroup'>
            <label htmlFor='assignee'>Assignee</label>
            <input 
              type='text' 
              id='assignee'
              name='assignee' 
              placeholder='Enter assignee name' 
              ref={assigneeRef}
              className='FormInput'
            />
          </div>

          <div className='FormButtons'>
            <button 
              type='button' 
              onClick={handleSave}
              disabled={isLoading}
              className='SaveButton'
            >
              {isLoading ? 'Saving...' : taskId ? 'Update Task' : 'Create Task'}
            </button>
            <button 
              type='button' 
              onClick={handleCancel}
              className='CancelButton'
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
