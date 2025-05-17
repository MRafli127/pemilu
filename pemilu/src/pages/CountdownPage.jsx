// pages/CountdownPage.jsx
import DashboardLayout from '../components/Layout/DashboardLayout';
import Countdown from '../components/Dashboard/Countdown';

const CountdownPage = () => {
  return (
    <DashboardLayout title="Countdown">
      <Countdown />
    </DashboardLayout>
  );
};

export default CountdownPage;