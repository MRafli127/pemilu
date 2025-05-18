import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CandidateCard from './CandidateCard';
import Button from '../UI/Button';
import api from '../../api/axios';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await api.get('/candidate');
        console.log(response.payload)

        const mappedCandidates = response.payload.map((Candidate) => ({
          id: Candidate.candidateid,
          name: Candidate.name,
          image: Candidate.image_url,
          visionMission: Candidate.description,
        }));

        setCandidates(mappedCandidates);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  const handleSelectCandidate = (candidateId) => {
    setSelectedCandidate(candidateId);
  };

  const handleVote = () => {
    if (selectedCandidate) {
      navigate('/vote-confirmation');
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap justify-center gap-8">
        {candidates.map(candidate => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            active={selectedCandidate === candidate.id}
            onClick={() => handleSelectCandidate(candidate.id)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          onClick={handleVote}
          className={`px-10 bg-red-500 text-white hover:bg-red-600 ${!selectedCandidate ? 'opacity-50 cursor-not-allowed' : ''}`}
          arrow
          disabled={!selectedCandidate}
        >
          Vote
        </Button>
      </div>
    </div>
  );
};

export default CandidateList;
