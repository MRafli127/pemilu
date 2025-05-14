const CandidateCard = ({ candidate, active = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-blue-200 rounded-xl p-6 shadow-md transition-all duration-300 hover:scale-105 ${
        active ? 'ring-4 ring-red-500' : ''
      } w-full max-w-[350px] mx-auto`}
    >
      <h3 className="text-xl font-bold text-center mb-4">{candidate.name}</h3>

      <div className="w-full aspect-square overflow-hidden rounded-lg mb-4">
        <img
          src={candidate.image}
          alt={candidate.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h4 className="text-lg font-semibold text-center mb-2">Visi dan Misi</h4>

      {active && (
        <p className="text-sm text-center text-gray-700">
          {candidate.visionMission}
        </p>
      )}
    </div>
  );
};

export default CandidateCard;
