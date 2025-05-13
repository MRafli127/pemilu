// components/Dashboard/VotingProgress.jsx
const VotingProgress = () => {
    const candidates = [
      { id: 1, name: "CANDIDATE1", votes: 1160, percentage: 58 },
      { id: 2, name: "CANDIDATE2", votes: 500, percentage: 25 },
      { id: 3, name: "CANDIDATE3", votes: 340, percentage: 17 }
    ];
    
    const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);
    
    return (
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">VOTING PROGRESS</h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {candidates.map(candidate => (
            <div key={candidate.id} className="bg-blue-200 rounded-lg p-4 flex items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-400 flex-shrink-0">
                <img 
                  src="https://via.placeholder.com/200" 
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