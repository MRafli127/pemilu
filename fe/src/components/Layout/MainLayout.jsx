// components/Layout/MainLayout.jsx
import { useNavigate } from 'react-router-dom';

const MainLayout = ({ children, title }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-blue-700 bg-opacity-30 backdrop-blur-sm rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">{title || "Choose Your President!"}</h1>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;