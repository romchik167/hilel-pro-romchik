import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export default function ProtectedRoute({ Component }) {
  const { isAuthenticated } = useSelector(state => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Component />;
}
