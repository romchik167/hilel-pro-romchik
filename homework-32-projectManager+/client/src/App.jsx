import { BrowserRouter } from 'react-router'
import './App.css'
import Content from './components/Content/Content'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </>
  )
}

export default App
