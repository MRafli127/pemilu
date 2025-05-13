// pages/VotersPerRegionPage.jsx
import DashboardLayout from '../components/Layout/DashboardLayout';
import VotersPerRegion from '../components/Dashboard/VotersPerRegion';

const VotersPerRegionPage = () => {
  return (
    <DashboardLayout title="Voters Per Region">
      <VotersPerRegion />
    </DashboardLayout>
  );
};

export default VotersPerRegionPage;
