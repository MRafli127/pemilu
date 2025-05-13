// pages/StartPage.jsx
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';

const StartPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-blue-800 text-white flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">Choose Your President!</h1>
        <Button 
          onClick={() => navigate('/login')} 
          className="px-10"
          arrow
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default StartPage;