import { useNavigate } from 'react-router';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './ProjectsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProjectsAsync, deleteProjectAsync } from '../../store/features/projects';
import { urls } from '../../common/menu';

export default function ProjectsPage() {
  const { data: projects } = useSelector(state => state.projects);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    dispatch(getProjectsAsync());
  }, [dispatch]);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(filterName.toLowerCase()) ||
    project.description.toLowerCase().includes(filterName.toLowerCase())
  );

  const handleViewTasks = projectId => {
    navigate(`/tasks/${projectId}`);
  };

  const handleDeleteProject = (projectId) => {
    if (confirm('Are you sure? All tasks in this project will be deleted!')) {
      dispatch(deleteProjectAsync(projectId));
    }
  };

  const handleEditProject = (projectId) => {
    navigate(`${urls.NEW_PROJECT_URL}?id=${projectId}`);
  };

  return (
    <div className='ProjectsPage'>
      <div className='ProjectsHeader'>
        <h1>Projects Dashboard</h1>
        <button type='button' className='AddProjectButton' onClick={() => navigate(urls.NEW_PROJECT_URL)}>
          + Add Project
        </button>
      </div>

      <div className='ProjectsFilter'>
        <input
          type='text'
          placeholder='Filter projects...'
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          className='FilterInput'
        />
      </div>

      <div className='Projects'>
        {filteredProjects.length === 0 && (
          <div className='NoProjects'>
            <span>{filterName ? 'No projects match your filter' : 'No projects available'}</span>
          </div>
        )}
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id} 
            {...project} 
            onViewTasks={() => handleViewTasks(project.id)}
            onEdit={() => handleEditProject(project.id)}
            onDelete={() => handleDeleteProject(project.id)}
          />
        ))}
      </div>
    </div>
  )
}