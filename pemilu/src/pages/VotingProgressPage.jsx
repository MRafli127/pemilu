// pages/VotingProgressPage.jsx
import DashboardLayout from '../components/Layout/DashboardLayout';
import VotingProgress from '../components/Dashboard/VotingProgress';

const VotingProgressPage = () => {
  return (
    <DashboardLayout title="Voting Progress">
      <VotingProgress />
    </DashboardLayout>
  );
};

export default VotingProgressPage;