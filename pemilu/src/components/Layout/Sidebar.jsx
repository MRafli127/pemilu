import { NavLink } from 'react-router-dom';

const Sidebar = ({ currentTime, formatTime, formatDate, handleLogout }) => {
  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col justify-between">
      <div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-1">Choose Your</h2>
          <h2 className="text-2xl font-bold mb-8">President!</h2>
        </div>
        <nav>
          <NavLink 
            to="/voting-progress" 
            className={({ isActive }) => 
              `py-3 px-6 block w-full transition-colors duration-200 ${
                isActive ? 'bg-blue-900' : 'hover:bg-blue-700'
              }`
            }
          >
            Voting Progress
          </NavLink>
          <NavLink 
            to="/voters-per-region" 
            className={({ isActive }) => 
              `py-3 px-6 block w-full transition-colors duration-200 ${
                isActive ? 'bg-blue-900' : 'hover:bg-blue-700'
              }`
            }
          >
            Voters per Region
          </NavLink>
          <NavLink 
            to="/countdown" 
            className={({ isActive }) => 
              `py-3 px-6 block w-full transition-colors duration-200 ${
                isActive ? 'bg-blue-900' : 'hover:bg-blue-700'
              }`
            }
          >
            Countdown
          </NavLink>
        </nav>
      </div>

      {/* Server Time dan Logout button di bawah */}
      <div className="p-6 border-t border-blue-700 flex flex-col items-start gap-4">
        <div className="text-white font-bold text-xl">
          Server Time:<br />
          {currentTime ? formatTime(currentTime) : '00:00'}<br />
          {currentTime ? formatDate(currentTime) : 'dd/mm/yyyy'}
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center justify-center mx-auto text-white font-bold bg-red-600 hover:bg-red-700 active:bg-red-800 px-6 py-2 rounded transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm1 2h10v10H4V5z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M10.293 7.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L11.586 11H6.5a1 1 0 010-2h5.086l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
