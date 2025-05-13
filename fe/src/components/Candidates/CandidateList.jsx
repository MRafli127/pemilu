// components/Candidates/CandidateList.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CandidateCard from './CandidateCard';
import Button from '../UI/Button';

const CandidateList = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const navigate = useNavigate();
  
  const candidates = [
    { 
      id: 1, 
      name: "Candidate 1",
      image: "https://via.placeholder.com/200",
    },
    { 
      id: 2, 
      name: "Candidate 2",
      image: "https://via.placeholder.com/200",
    },
    { 
      id: 3, 
      name: "Candidate 3",
      image: "https://via.placeholder.com/200",
    }
  ];
  
  const handleSelectCandidate = (candidateId) => {
    setSelectedCandidate(candidateId);
  };
  
  const handleVote = () => {
    if (selectedCandidate) {
      // In a real app, send vote to server
      navigate('/voting-progress');
    }
  };
  
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {candidates.map(candidate => (
          <CandidateCard 
            key={candidate.id}
            candidate={candidate}
            active={selectedCandidate === candidate.id}
            onClick={() => handleSelectCandidate(candidate.id)}
          />
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button 
          onClick={handleVote} 
          className={`px-10 ${!selectedCandidate ? 'opacity-50 cursor-not-allowed' : ''}`}
          arrow
        >
          Vote
        </Button>
      </div>
    </div>
  );
};

export default CandidateList;