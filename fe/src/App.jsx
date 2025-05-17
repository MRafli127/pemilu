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

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/candidates" element={<CandidatesPage />} />
          <Route path="/voting-progress" element={<VotingProgressPage />} />
          <Route path="/voters-per-region" element={<VotersPerRegionPage />} />
          <Route path="/countdown" element={<CountdownPage />} />
          <Route path="/vote-confirmation" element={<VoteConfirmationPage />} /> {/* Route baru */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
