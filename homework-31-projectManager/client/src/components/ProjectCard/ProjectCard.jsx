import { useDispatch } from 'react-redux';
import PriorityLabel from '../PriorityLabel/PriorityLabel';
import { deleteProjectAsync } from '../../store/features/projects';
import './ProjectCard.css';

export default function ProjectCard({ id, title, description, priority, onClick }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    onClick && onClick(id);
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm('delete this project?')) {
      dispatch(deleteProjectAsync(id));
    }
  }

  return (
    <div className='ProjectCard' onClick={handleClick}>
      <h3>{title}</h3>
      <PriorityLabel priority={priority} />
      <p>
        {description}
      </p>
      <button type='button' onClick={handleDelete}>Delete</button>
    </div>
  )
}