import express, { response } from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { projectsMock } from './mockData/projects.js';
import { tasksData } from './mockData/tasks.js';

const app = express();
app.use(express.json());
app.use(cors());

// PROJECTS ROUTES
app.get('/projects', (request, response) => {
  return response.json(projectsMock);
});

app.post('/projects', (request, response) => {
  const data = request.body;
  const newProject = {
    id: uuidv4(),
    ...data,
  };
  projectsMock.push(newProject);
  return response.send(newProject);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const data = request.body;
  const projectIndex = projectsMock.findIndex((p) => p.id === id);
  
  if (projectIndex === -1) {
    return response.status(404).json({ error: 'Project not found' });
  }
  
  projectsMock[projectIndex] = { ...projectsMock[projectIndex], ...data, id };
  return response.json(projectsMock[projectIndex]);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  const projectIndex = projectsMock.findIndex((p) => p.id === id);
  
  if (projectIndex === -1) {
    return response.status(404).json({ error: 'Project not found' });
  }
  
  const deletedProject = projectsMock.splice(projectIndex, 1);
  // Also delete all associated tasks
  const tasksToDelete = tasksData.filter((t) => t.projectId === id);
  tasksToDelete.forEach((task) => {
    const taskIndex = tasksData.indexOf(task);
    if (taskIndex > -1) {
      tasksData.splice(taskIndex, 1);
    }
  });
  
  return response.json(deletedProject[0]);
});

// TASKS ROUTES
app.get('/tasks', (request, response) => {
  return response.json(tasksData);
});

app.get('/tasks/:projectId', (request, response) => {
  const { projectId } = request.params;
  const filtered = tasksData.filter((t) => t.projectId === projectId);
  return response.json(filtered);
});

app.post('/tasks', (request, response) => {
  const data = request.body;
  const newTask = {
    id: uuidv4(),
    ...data,
  };
  tasksData.push(newTask);
  return response.json(newTask);
});

app.put('/tasks/:id', (request, response) => {
  const { id } = request.params;
  const data = request.body;
  const taskIndex = tasksData.findIndex((t) => t.id === id);
  
  if (taskIndex === -1) {
    return response.status(404).json({ error: 'Task not found' });
  }
  
  tasksData[taskIndex] = { ...tasksData[taskIndex], ...data, id };
  return response.json(tasksData[taskIndex]);
});

app.delete('/tasks/:id', (request, response) => {
  const { id } = request.params;
  const taskIndex = tasksData.findIndex((t) => t.id === id);
  
  if (taskIndex === -1) {
    return response.status(404).json({ error: 'Task not found' });
  }
  
  const deletedTask = tasksData.splice(taskIndex, 1);
  return response.json(deletedTask[0]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});