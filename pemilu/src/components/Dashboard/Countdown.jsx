// components/Dashboard/Countdown.jsx
import { useEffect, useState } from 'react';

const Countdown = () => {
  const endDate = new Date('2025-05-19T23:59:59');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  
  function calculateTimeRemaining() {
    const now = new Date();
    const difference = endDate - now;
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-12">
        <div>
          <p className="text-lg text-blue-800">Start Time:</p>
          <p className="text-xl font-bold text-blue-800">00:00:00 - 12/05/2025</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center mt-12">
        <h1 className="text-6xl font-bold text-blue-800">
          {String(timeRemaining.days).padStart(2, '0')}:
          {String(timeRemaining.hours).padStart(2, '0')}:
          {String(timeRemaining.minutes).padStart(2, '0')}:
          {String(timeRemaining.seconds).padStart(2, '0')}
        </h1>
      </div>
      
      <div className="flex justify-between items-center mt-12">
        <div></div>
        <div>
          <p className="text-lg text-blue-800">End Time:</p>
          <p className="text-xl font-bold text-blue-800">23:59:59 - 13/05/2025</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;