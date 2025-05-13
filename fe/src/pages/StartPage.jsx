// pages/StartPage.jsx
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
import logo from '../assets/logoputih.png'; // Import logo

const StartPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-blue-800 text-white flex items-center justify-center p-4">
      <div className="text-center">
        {/* Logo besar */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-40 w-auto" /> {/* h-40 = besar */}
        </div>

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
