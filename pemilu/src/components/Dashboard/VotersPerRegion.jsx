import { useState, useEffect } from 'react';
import api from '../../api/axios.js';

import { useAuth } from '../../context/AuthContext';
import { useCountdown } from '../../context/CountdownContext';

const VotingProgress = () => {
  const [regionsData, setRegionsData] = useState([]);
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
        const [candidatesRes, branch1Res, branch2Res, branch3Res] = await Promise.all([
          api.get('https://finpro-sbd-backend.vercel.app/candidate/'),
          api.get('https://finpro-sbd-backend.vercel.app/branch/1'),
          api.get('https://finpro-sbd-backend.vercel.app/branch/2'),
          api.get('https://finpro-sbd-backend.vercel.app/branch/3')
        ]);

        const candidates = candidatesRes.payload || [];
        const regionVotes = {
          'Region 1': branch1Res.payload || [],
          'Region 2': branch2Res.payload || [],
          'Region 3': branch3Res.payload || []
        };

        // Sort candidates by their original order (Alice, Bob, Wesley)
        const sortedCandidates = [...candidates].sort((a, b) => a.candidateid - b.candidateid);

        const regionsDisplayData = Object.entries(regionVotes).map(([regionName, votes]) => {
          const totalVotes = votes.length;

          const candidatesWithVotes = sortedCandidates.map(candidate => {
            const voteCount = votes.filter(vote => vote.candidateid === candidate.candidateid).length;
            const percentage = totalVotes > 0
              ? (voteCount / totalVotes) * 100
              : 0;

            return {
              id: candidate.candidateid,
              name: candidate.name,
              image: candidate.image_url,
              votes: voteCount,
              percentage: percentage.toFixed(1)
            };
          });

          return {
            regionName,
            totalVotes,
            candidates: candidatesWithVotes // Keep original order
          };
        });

        setRegionsData(regionsDisplayData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load voting data');
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center p-8">Loading voting data...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">REGIONAL VOTING PROGRESS</h2>

      <div className="space-y-12 max-w-4xl mx-auto">
        {regionsData.map(region => (
          <div key={region.regionName} className="bg-blue-100 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              {region.regionName} - Total Votes: {shouldShowResults ? region.totalVotes : 0}
            </h3>

            <div className="space-y-6">
              {region.candidates.map(candidate => (
                <div key={`${region.regionName}-${candidate.id}`} className="bg-blue-200 rounded-lg p-4 flex items-center">
                  <div className="w-20 h-20 overflow-hidden bg-blue-400 flex-shrink-0 rounded-lg">
                    <img 
                      src={candidate.image} 
                      alt={candidate.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = 'https://via.placeholder.com/80';
                      }}
                    />
                  </div>

                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-lg text-blue-800">{candidate.name}</h4>
                      <span className="font-bold text-lg text-blue-800">
                        {shouldShowResults ? candidate.percentage : 0}%
                      </span>
                    </div>

                    <div className="bg-gray-300 rounded-full h-3 overflow-hidden">
                      {shouldShowResults && <div 
                        className="bg-blue-600 h-full rounded-full"
                        style={{ width: `${candidate.percentage}%` }}
                      ></div> }
                    </div>

                    <div className="text-blue-800 text-sm mt-1">
                      {shouldShowResults ? candidate.votes : 0} votes ({shouldShowResults ? candidate.percentage : 0}%)
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingProgress;