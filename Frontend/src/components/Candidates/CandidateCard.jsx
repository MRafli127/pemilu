const CandidateCard = ({ candidate, active = false, onClick }) => {
  // Fallback if candidate is undefined
  if (!candidate) return <div className="bg-gray-200 p-6 rounded-xl">No candidate data</div>;

  return (
    <div
      onClick={onClick}
      className={`bg-blue-200 rounded-xl p-6 shadow-md transition-all duration-300 hover:scale-105 cursor-pointer ${
        active ? 'ring-4 ring-red-500' : ''
      } w-full max-w-[350px] mx-auto`}
    >
      <h3 className="text-xl font-bold text-center mb-4 text-black">
        {candidate.name || "No Name"}
      </h3>

      {/* Image with fallback */}
      <div className="w-full aspect-square overflow-hidden rounded-lg mb-4 bg-gray-200 flex items-center justify-center">
        {candidate.image ? (
          <img
            src={candidate.image}
            alt={candidate.name || "Candidate"}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl font-bold text-gray-500">
            {/* Safely get first letter or default to "?" */}
            {(candidate.name && candidate.name.charAt(0)) || "?"}
          </span>
        )}
      </div>

      <h4 className="text-lg font-semibold text-center mb-2">Visi dan Misi</h4>
      <p className="text-sm text-center text-gray-700">
        {candidate.visionMission || "No description available."}
      </p>
    </div>
  );
};

export default CandidateCard;
