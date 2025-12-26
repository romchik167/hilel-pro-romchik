import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './MainPage.css';

export default function MainPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(state => state.auth);

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/projects');
    }
  };

  return (
    <div className='MainPage'>
      <div className='HeroSection'>
        <h1>Projects Dashboard</h1>
        <p className='Subtitle'>Manage your projects and tasks efficiently</p>
        
        {isAuthenticated ? (
          <button className='CTAButton' onClick={handleGetStarted}>
            Go to Dashboard
          </button>
        ) : (
          <div className='LoginPrompt'>
            <p>Please log in with credentials:</p>
            <p className='Credentials'>
              <strong>Username:</strong> admin<br/>
              <strong>Password:</strong> admin
            </p>
          </div>
        )}
      </div>
    </div>
  );
}