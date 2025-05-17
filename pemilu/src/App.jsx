// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CandidatesPage from './pages/CandidatesPage';
import VotingProgressPage from './pages/VotingProgressPage';
import VotersPerRegionPage from './pages/VotersPerRegionPage';
import CountdownPage from './pages/CountdownPage';
import StartPage from './pages/StartPage';
import DashboardPage from './pages/DashboardPage';
import VoteConfirmationPage from './pages/VoteConfirmationPage'; // import halaman konfirmasi
import { AuthProvider } from './context/AuthContext';

import ProtectedRoute from './components/Auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /> </ProtectedRoute>} />
          <Route path="/candidates" element={<ProtectedRoute><CandidatesPage /> </ProtectedRoute>} />
          <Route path="/voting-progress" element={<ProtectedRoute><VotingProgressPage /> </ProtectedRoute>} />
          <Route path="/voters-per-region" element={<ProtectedRoute><VotersPerRegionPage /> </ProtectedRoute>} />
          <Route path="/countdown" element={<ProtectedRoute><CountdownPage /> </ProtectedRoute>} />
          <Route path="/vote-confirmation" element={<ProtectedRoute><VoteConfirmationPage /> </ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
