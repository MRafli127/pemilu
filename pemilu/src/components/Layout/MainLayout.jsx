// components/Layout/MainLayout.jsx
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoputih.png';

const MainLayout = ({ children, title }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-800 text-white flex items-center justify-center p-4">
      {/* Lebar sangat besar agar muat 3 kandidat */}
      <div className="w-full max-w-screen-xl bg-blue-700 bg-opacity-30 backdrop-blur-sm rounded-xl shadow-xl p-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-32 w-auto" />
        </div>

        {/* Judul */}
        <h1 className="text-4xl font-bold text-center mb-10">
          {title || "Choose Your President!"}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default MainLayout;
