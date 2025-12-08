import { useNavigate } from 'react-router-dom';
import PriorityLabel from '../PriorityLabel/PriorityLabel';
import './TaskCard.css';

const statusColors = {
  'todo': '#f0ad4e',
  'in-progress': '#5bc0de',
  'blocked': '#d9534f',
  'done': '#5cb85c'
};

export default function TaskCard({ 
  id,
  title, 
  description, 
  priority,
  status = 'todo',
  assignee = 'Unassigned',
  projectId,
  onDelete
}) {
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete && onDelete(id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/tasks/new/${projectId}?id=${id}`);
  };

  return (
    <div className='TaskCard' onClick={handleEdit}>
      <div className='TaskCardHeader'>
        <h3>{title}</h3>
        <div className='TaskMeta'>
          <PriorityLabel priority={priority} />
          <span 
            className='StatusBadge' 
            style={{ backgroundColor: statusColors[status] || '#95a5a6' }}
          >
            {status}
          </span>
        </div>
      </div>
      
      <p className='TaskDescription'>
        {description}
      </p>

      <div className='TaskCardFooter'>
        <span className='AssigneeBadge'>👤 {assignee}</span>
        <button 
          type='button' 
          className='DeleteButton' 
          onClick={handleDelete}
        >
          ✕
        </button>
      </div>
    </div>
  );
}