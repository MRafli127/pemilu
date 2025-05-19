import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CandidateCard from './CandidateCard';
import Button from '../UI/Button';
import api from '../../api/axios';
import { useAuth } from '../../context/AuthContext';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState({
    id: null,
    index: null // This will be our frontend-only index
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await api.get('https://finpro-sbd-backend.vercel.app/candidate/');
        
        // Add frontend-only index to each candidate (1-based)
        const candidatesWithIndex = response.payload.map((Candidate, index) => ({
          ...Candidate,
          frontendIndex: index + 1 // This exists only in React state
        }));
        
        setCandidates(candidatesWithIndex);
      } catch (error) {
        console.error('Error fetching candidates:', error);
        setError('Failed to fetch candidates');
      }
    };

    fetchCandidates();
  }, []);

  const handleSelectCandidate = (candidateId, frontendIndex) => {
    setSelectedCandidate({
      id: candidateId,
      index: frontendIndex
    });
    setError(null);
  };

  const handleVote = async () => {
    if (!selectedCandidate.id) return;

    setIsLoading(true);
    setError(null);

    try {
      // Use the frontend index to determine the branch endpoint
      switch(selectedCandidate.index) {
        case 1: 
        response = await api.post(
        `https://finpro-sbd-backend.vercel.app/branch/add1`,
        {
          Voter: user.id,
          CandidateID: selectedCandidate.id
        }
      );
        break;
        case 2: 
        response = await api.post(
        `https://finpro-sbd-backend.vercel.app/branch/add2`,
        {
          Voter: user.id,
          CandidateID: selectedCandidate.id
        }
      );
        break;
        case 3: 
        response = await api.post(
        `https://finpro-sbd-backend.vercel.app/branch/add3`,
        {
          Voter: user.id,
          CandidateID: selectedCandidate.id
        }
      );
        break;
        default: 
      }

      if (response.payload.success) {
        navigate('/vote-confirmation');
      } else {
        throw new Error(response.payload.message || 'Voting failed');
      }
    } catch (error) {
      console.error('Error submitting vote:', error);
      setError(error.message || 'Failed to submit vote');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-8">
        {candidates.map(candidate => (
          <CandidateCard
            key={candidate.candidateid}
            candidate={{
              id: candidate.candidateid,
              name: candidate.name,
              image: candidate.image_url,
              visionMission: candidate.description
            }}
            active={selectedCandidate.id === candidate.candidateid}
            onClick={() => handleSelectCandidate(candidate.candidateid, candidate.frontendIndex)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          onClick={handleVote}
          className={`px-10 bg-red-500 text-white hover:bg-red-600 ${
            !selectedCandidate.id || isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          arrow
          disabled={!selectedCandidate.id || isLoading}
        >
          {isLoading ? 'Processing...' : 'Vote'}
        </Button>
      </div>
    </div>
  );
};

export default CandidateList;