import { useEffect, useRef, useState } from 'react';
import './NewProjectPage.css';
import { PRIORITIES } from '../../common/priorities';
import { useDispatch, useSelector } from 'react-redux';
import { saveProjectAsync, getProjectsAsync } from '../../store/features/projects';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { urls } from '../../common/menu';

export default function NewProjectPage() {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('id');
  
  const titleRef = useRef();
  const descriptionRef = useRef();
  const priorityRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { data: projects } = useSelector(state => state.projects);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const currentProject = projectId ? projects.find(p => p.id === projectId) : null;

  useEffect(() => {
    if (projectId && !currentProject && projects.length === 0) {
      dispatch(getProjectsAsync());
    }
  }, [projectId, currentProject, dispatch, projects.length]);

  useEffect(() => {
    if (currentProject) {
      titleRef.current.value = currentProject.title || '';
      descriptionRef.current.value = currentProject.description || '';
      priorityRef.current.value = currentProject.priority || 'MEDIUM';
    }
  }, [currentProject]);

  const handleSave = async () => {
    const title = titleRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    const priority = priorityRef.current.value;

    if (!title) {
      alert('Please enter a project title');
      return;
    }

    setIsLoading(true);
    
    const projectData = {
      title,
      description,
      priority,
    };

    if (projectId) {
      projectData.id = projectId;
    }

    try {
      await dispatch(saveProjectAsync(projectData));
      setIsSaved(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSaved) {
      navigate(urls.PROJECTS_URL);
    }
  }, [navigate, isSaved]);

  const handleCancel = () => {
    navigate(urls.PROJECTS_URL);
  };

  return (
    <div className='NewProjectPage'>
      <div className='ProjectForm'>
        <h1>{projectId ? 'Edit Project' : 'Create New Project'}</h1>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='FormGroup'>
            <label htmlFor='title'>Project Title *</label>
            <input 
              type='text' 
              id='title'
              name='title' 
              placeholder='Enter project title' 
              ref={titleRef}
              className='FormInput'
            />
          </div>

          <div className='FormGroup'>
            <label htmlFor='description'>Description</label>
            <textarea 
              id='description'
              name='description' 
              placeholder='Enter project description' 
              ref={descriptionRef}
              className='FormTextarea'
              rows='5'
            />
          </div>

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

          <div className='FormButtons'>
            <button 
              type='button' 
              onClick={handleSave}
              disabled={isLoading}
              className='SaveButton'
            >
              {isLoading ? 'Saving...' : projectId ? 'Update Project' : 'Create Project'}
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