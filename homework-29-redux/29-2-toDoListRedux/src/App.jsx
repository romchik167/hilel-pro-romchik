import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './pages/Menu'
import ListPage from './pages/ListPage'
import Page404 from './pages/Page404'
import AddTaskPage from './pages/AddTaskPage'
import HomePage from './pages/HomePage'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={"container"}>
          <h1 className={"title"}>To Do List</h1>
          <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/list-page' element={<ListPage />} />
            <Route path='/add-task-page' element={<AddTaskPage />}/>
            <Route path='*' element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
