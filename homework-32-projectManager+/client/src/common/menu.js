import MainPage from "../pages/MainPage/MainPage";
import NewProjectPage from "../pages/NewProjectPage/NewProjectPage";
import NewTaskPage from "../pages/NewTaskPage/NewTaskPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import TasksPage from "../pages/TasksPage/TasksPage";

export const urls = {
  NEW_PROJECT_URL: '/projects/new',
  PROJECTS_URL: '/projects',
};

export const menuItems = [
  {
    path: '/',
    title: 'Main',
    Component: MainPage,
    protected: false,
  },
  {
    path: urls.PROJECTS_URL,
    title: 'Projects',
    Component: ProjectsPage,
    protected: true,
  },
  {
    path: urls.NEW_PROJECT_URL,
    hideInMenu: true,
    Component: NewProjectPage,
    protected: true,
  },
  {
    path: '/tasks',
    title: 'Tasks',
    Component: TasksPage,
    protected: true,
  },
  {
    path: '/tasks/:projectId',
    hideInMenu: true,
    Component: TasksPage,
    protected: true,
  },
  {
    path: '/tasks/new/:projectId',
    hideInMenu: true,
    Component: NewTaskPage,
    protected: true,
  },
];