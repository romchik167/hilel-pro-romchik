import PriorityLabel from '../PriorityLabel/PriorityLabel';
import './ProjectCard.css';

export default function ProjectCard({ 
  id, 
  title, 
  description, 
  priority, 
  onViewTasks,
  onEdit,
  onDelete 
}) {
  const handleViewTasks = (e) => {
    e.stopPropagation();
    onViewTasks && onViewTasks(id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit && onEdit(id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete && onDelete(id);
  };

  return (
    <div className='ProjectCard'>
      <div className='ProjectCardHeader'>
        <h3>{title}</h3>
        <PriorityLabel priority={priority} />
      </div>
      
      <p className='ProjectDescription'>
        {description}
      </p>

      <div className='ProjectCardActions'>
        <button type='button' className='ViewButton' onClick={handleViewTasks}>
          View Tasks
        </button>
        <button type='button' className='EditButton' onClick={handleEdit}>
          Edit
        </button>
        <button type='button' className='DeleteButton' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}