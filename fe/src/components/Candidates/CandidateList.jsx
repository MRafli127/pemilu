import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CandidateCard from './CandidateCard';
import Button from '../UI/Button';

import candidate1Image from '../../assets/NO1.jpg';
import candidate2Image from '../../assets/NO2.jpg';
import candidate3Image from '../../assets/NO3.jpeg';

const CandidateList = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const navigate = useNavigate();

  const candidates = [
    {
      id: 1,
      name: "Candidate 1",
      image: candidate1Image,
      visionMission:
        "Mewujudkan perubahan menuju Indonesia adil dan makmur melalui pendidikan berkualitas, ekonomi berkeadilan, dan pemerintahan bersih.",
    },
    {
      id: 2,
      name: "Candidate 2",
      image: candidate2Image,
      visionMission:
        "Meneruskan pembangunan nasional untuk Indonesia Maju dengan prioritas ketahanan pangan, digitalisasi, dan stabilitas nasional.",
    },
    {
      id: 3,
      name: "Candidate 3",
      image: candidate3Image,
      visionMission:
        "Membangun Indonesia dari desa, memperkuat demokrasi, memperluas layanan kesehatan dan pendidikan berkualitas untuk seluruh rakyat.",
    },
  ];

  const handleSelectCandidate = (candidateId) => {
    setSelectedCandidate(candidateId);
  };

  const handleVote = () => {
    if (selectedCandidate) {
      navigate('/voting-progress');
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
