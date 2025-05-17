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
  name: "Anies Baswedan - Muhaimin Iskandar ",
  image: candidate1Image,
  visionMission:
    "Mewujudkan Indonesia maju, berkeadilan, dan sejahtera melalui pemerintahan yang bersih dan berpihak pada rakyat. Meliputi peningkatan kualitas pendidikan yang merata, pengembangan ekonomi rakyat terutama UMKM dan pertanian, serta pemberantasan korupsi dengan transparansi. Mereka juga berkomitmen memperkuat infrastruktur nasional, menjaga persatuan dan keragaman, meningkatkan layanan kesehatan dan sosial, serta menjaga lingkungan hidup secara berkelanjutan demi masa depan Indonesia yang lebih baik."
},
{
  id: 2,
  name: "Prabowo Subianto - Sandiaga Uno",
  image: candidate2Image,
  visionMission:
    "Meneruskan pembangunan nasional yang berfokus pada kedaulatan pangan, peningkatan sumber daya manusia, percepatan digitalisasi, serta menjaga stabilitas nasional dan keamanan untuk mewujudkan Indonesia yang mandiri dan kuat."
},
{
  id: 3,
  name: "Ganjar Pranowo - Mahfud MD",
  image: candidate3Image,
  visionMission:
    "Membangun Indonesia dari desa dengan pemberdayaan masyarakat, memperkuat demokrasi dan tata kelola pemerintahan yang bersih, serta memperluas akses layanan kesehatan dan pendidikan berkualitas demi kesejahteraan seluruh rakyat."
}
  ];

  const handleSelectCandidate = (candidateId) => {
    setSelectedCandidate(candidateId);
  };

  const handleVote = () => {
    if (selectedCandidate) {
      navigate('/vote-confirmation'); // arahkan ke halaman konfirmasi vote
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
        >
          Vote
        </Button>
      </div>
    </div>
  );
};

export default CandidateList;
