// components/Layout/Sidebar.jsx
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-1">Choose Your</h2>
        <h2 className="text-2xl font-bold mb-8">President!</h2>
      </div>
      <nav className="flex-1">
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
  );
};

export default Sidebar;