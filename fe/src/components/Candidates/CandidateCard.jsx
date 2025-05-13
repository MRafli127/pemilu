// components/Candidates/CandidateCard.jsx
const CandidateCard = ({ candidate, active = false, onClick }) => {
    return (
      <div 
        className={`bg-blue-200 rounded-lg overflow-hidden transition-all duration-300 ${active ? 'ring-4 ring-blue-500' : ''}`}
        onClick={onClick}
      >
        <div className="p-6">
          <h3 className="text-xl font-bold text-center mb-4">Candidate{candidate.id}</h3>
          
          <div className="flex justify-center mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img 
                src={candidate.image} 
                alt={`Candidate ${candidate.id}`} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h4 className="text-lg font-semibold text-center mb-2">Visi dan Misi</h4>
          
          {active && (
            <p className="text-sm text-center text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>
          )}
        </div>
      </div>
    );
  };
  
  export default CandidateCard;