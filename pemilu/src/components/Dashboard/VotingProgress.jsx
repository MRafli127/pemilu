import { useState, useEffect } from 'react';
import api from '../../api/axios.js';
import { useAuth } from '../../context/AuthContext';
import { useCountdown } from '../../context/CountdownContext';

const VotingProgress = () => {
  const [candidates, setCandidates] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const { isCountdownZero } = useCountdown();

  const shouldShowResults = isCountdownZero || user?.isadmin;
  console.log('isCountdownZero:', isCountdownZero);
  console.log('user.isadmin:', user?.isadmin);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Fetch candidates
        const candidatesResponse = await api.get('https://finpro-sbd-backend.vercel.app/candidate/');
        const allCandidates = candidatesResponse.payload || [];

        // 2. Fetch all votes from /main/sync
        const votesResponse = await api.post('https://finpro-sbd-backend.vercel.app/main/sync');
        const allVotes = votesResponse.payload || [];

        // 3. Count votes per candidate
        const voteCounts = {};
        allVotes.forEach(vote => {
          const id = vote.candidateid;
          if (voteCounts[id]) {
            voteCounts[id]++;
          } else {
            voteCounts[id] = 1;
          }
        });

        const total = allVotes.length;

        // 4. Map candidates with vote count and percentage
        const updatedCandidates = allCandidates.map(candidate => {
          const votes = voteCounts[candidate.candidateid] || 0;
          const percentage = total > 0 ? Math.round((votes / total) * 100) : 0;

          return {
            id: candidate.candidateid,
            name: candidate.name,
            votes,
            percentage,
            image: candidate.image_url || defaultCandidateImage,
            description: candidate.description
          };
        });

        setCandidates(updatedCandidates);
        setTotalVotes(total);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load voting data');
        setLoading(false);
      }
    };

    fetchData();

    // Optional: Polling every 10 seconds
    const interval = setInterval(fetchData, 10000);
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
                onError={(e) => {
                  e.target.src = defaultCandidateImage;
                }}
              />
            </div>

            <div className="ml-4 flex-grow">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-xl text-blue-800">{candidate.name}</h3>
                {shouldShowResults && (
                  <span className="font-bold text-xl text-blue-800">{candidate.percentage}%</span>
                )}
              </div>

              <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-white h-full rounded-full"
                  style={{ width: !shouldShowResults ? '0%' : `${candidate.percentage}%` }}
                ></div>
              </div>

              <div className="flex justify-between mt-1">
                {shouldShowResults && (
                  <p className="text-blue-800">{candidate.votes} Votes</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 text-blue-800 text-2xl font-bold">
        {/* Total: {totalVotes} Votes */}
      </div>
    </div>
  );
};

export default VotingProgress;
