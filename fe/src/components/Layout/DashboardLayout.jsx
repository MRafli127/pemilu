// components/Layout/DashboardLayout.jsx
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';

const DashboardLayout = ({ children, title }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-blue-800 flex">
      <Sidebar />
      <div className="flex-1 bg-blue-100">
        <div className="p-6 h-full">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-center uppercase">{title}</h1>
            <div className="flex items-center text-sm">
              <div className="text-blue-800">
                Server Time:<br />
                00:22<br />
                12/05/2025
              </div>
              <button 
                onClick={handleLogout} 
                className="ml-4 flex items-center text-blue-800 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm1 2h10v10H4V5z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10.293 7.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L11.586 11H6.5a1 1 0 010-2h5.086l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Logout
              </button>
            </div>
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
