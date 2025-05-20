// pages/DashboardPage.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to voting progress as default dashboard view
    navigate('/voting-progress');
  }, [navigate]);
  
  return null;
};

export default DashboardPage;