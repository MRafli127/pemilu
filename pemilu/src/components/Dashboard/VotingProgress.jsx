import { useState, useEffect } from 'react';
import api from '../../api/axios.js'; // corrected import
import candidate1Image from '../../assets/NO1.jpg';
import candidate2Image from '../../assets/NO2.jpg';
import candidate3Image from '../../assets/NO3.jpeg';

const VotingProgress = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "CANDIDATE 1", votes: 0, percentage: 0, image: candidate1Image },
    { id: 2, name: "CANDIDATE 2", votes: 0, percentage: 0, image: candidate2Image },
    { id: 3, name: "CANDIDATE 3", votes: 0, percentage: 0, image: candidate3Image },
  ]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVoteData = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          api.get('https://finpro-sbd-backend.vercel.app/branch/1'),
          api.get('https://finpro-sbd-backend.vercel.app/branch/2'),
          api.get('https://finpro-sbd-backend.vercel.app/branch/3')
        ]);

        const votes1 = res1.payload || [];
        const votes2 = res2.payload || [];
        const votes3 = res3.payload || [];
        const total = votes1.length + votes2.length + votes3.length;

        setCandidates([
          { 
            id: 1, 
            name: "CANDIDATE 1", 
            votes: votes1.length, 
            percentage: total > 0 ? Math.round((votes1.length / total) * 100) : 0,
            image: candidate1Image 
          },
          { 
            id: 2, 
            name: "CANDIDATE 2", 
            votes: votes2.length, 
            percentage: total > 0 ? Math.round((votes2.length / total) * 100) : 0,
            image: candidate2Image 
          },
          { 
            id: 3, 
            name: "CANDIDATE 3", 
            votes: votes3.length, 
            percentage: total > 0 ? Math.round((votes3.length / total) * 100) : 0,
            image: candidate3Image 
          }
        ]);
        setTotalVotes(total);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching vote data:', err);
        setError('Failed to load voting data');
        setLoading(false);
      }
    };

    fetchVoteData();

    // Optional: Set up polling to refresh data periodically
    const interval = setInterval(fetchVoteData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading voting data...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">VOTING PROGRESS</h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {candidates.map(candidate => (
          <div key={candidate.id} className="bg-blue-200 rounded-lg p-4 flex items-center">
            <div className="w-28 h-28 overflow-hidden bg-blue-400 flex-shrink-0 rounded-lg">
              <img 
                src={candidate.image} 
                alt={candidate.name} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="ml-4 flex-grow">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-xl text-blue-800">{candidate.name}</h3>
                <span className="font-bold text-xl text-blue-800">{candidate.percentage}%</span>
              </div>

              <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-white h-full rounded-full"
                  style={{ width: `${candidate.percentage}%` }}
                ></div>
              </div>

              <p className="mt-1 text-blue-800">{candidate.votes} Votes</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 text-blue-800 text-2xl font-bold">
        Total: {totalVotes} Votes
      </div>
    </div>
  );
};

export default VotingProgress;