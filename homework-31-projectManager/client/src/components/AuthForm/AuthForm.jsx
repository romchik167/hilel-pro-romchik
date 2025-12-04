import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../store/features/auth';
import './AuthForm.css';

export default function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      const token = `token_${Date.now()}`;
      dispatch(login({ user: { username }, token }));
      setUsername('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='AuthForm'>
      {isAuthenticated && user ? (
        <div>
          <span>{user.username}</span>
          <button type='button' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
        </form>
      )}
    </div>
  );
}
