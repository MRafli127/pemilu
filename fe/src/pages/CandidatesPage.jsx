// pages/CandidatesPage.jsx
import MainLayout from '../components/Layout/MainLayout';
import CandidateList from '../components/Candidates/CandidateList';

const CandidatesPage = () => {
  return (
    <MainLayout title="Our Candidates">
      <CandidateList />
    </MainLayout>
  );
};

export default CandidatesPage;
