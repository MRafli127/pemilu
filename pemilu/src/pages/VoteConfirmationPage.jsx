import React from 'react';
import { useNavigate } from 'react-router-dom';

const VoteConfirmation = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    //navigate('/voting-progress'); // Ganti sesuai rute tujuan setelah vote
    navigate('/countdown'); 
  };

  return (
    <div className="min-h-screen bg-blue-800 flex flex-col justify-center items-center p-6">
      <svg
        className="w-40 h-40 mb-10 stroke-white"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="2" />
        <path
          d="M20 33l10 10 18-24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h1 className="text-white font-bold text-3xl text-center max-w-md leading-snug mb-14">
        Your vote has been counted.<br />
        Thanks for voting!
      </h1>

      <button
        onClick={handleContinue}
        className="px-8 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-800 transition-colors duration-300 flex items-center gap-2"
      >
        Continue
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default VoteConfirmation;
