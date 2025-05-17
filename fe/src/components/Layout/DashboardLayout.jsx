import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';

const DashboardLayout = ({ children, title }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const formatTime = (date) =>
    date.toLocaleTimeString('en-GB', { hour12: false });

  const formatDate = (date) =>
    date.toLocaleDateString('en-GB');

  return (
    <div className="min-h-screen bg-blue-800 flex">
      <Sidebar 
        currentTime={currentTime} 
        formatTime={formatTime} 
        formatDate={formatDate}
        handleLogout={handleLogout} 
      />
      <div className="flex-1 bg-blue-100">
        <div className="p-6 h-full">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-center uppercase">{title}</h1>
          </div>
          <div className="bg-blue-50 rounded-lg shadow-lg h-[calc(100vh-120px)] overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
