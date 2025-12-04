import { Route, Routes } from 'react-router';
import './Content.css';
import { menuItems } from '../../common/menu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

export default function Content() {
  return (
    <Routes>
      {menuItems.map(({ path, Component, protected: isProtected }) => (
        <Route 
          key={path} 
          path={path} 
          element={isProtected ? <ProtectedRoute Component={Component} /> : <Component />} 
        />
      ))}
    </Routes>
  )
}