// components/Dashboard/Countdown.jsx
import { useEffect, useState, useContext } from 'react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

const Countdown = () => {
    const { user } = useAuth();
  const [endDate, setEndDate] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [customTime, setCustomTime] = useState("");

  // Fetch latest end_time from the backend
  const fetchEndTime = async () => {
  try {
    const res = await axios.get('https://finpro-sbd-backend.vercel.app/countdown/read');
    // Assume backend sends end_time as timestamp in milliseconds
    const latestEndTime = new Date(res.data.payload.end_time); 
    setEndDate(latestEndTime);
  } catch (err) {
    console.error("Error fetching countdown:", err);
  }
};

// When submitting new time
const handleSubmitTime = async () => {
  if (!customTime) return;
  try {
    // Convert datetime-local string to timestamp in milliseconds
    const timestamp = new Date(customTime).getTime();

    const res = await axios.post('https://finpro-sbd-backend.vercel.app/countdown/add', { end_time: timestamp });
    const newEndDate = new Date(res.data.payload.end_time);
    setEndDate(newEndDate);
    setCustomTime("");
  } catch (err) {
    console.error("Error adding new end_time:", err);
    alert("Failed to set new end time. Please check the format.");
  }
};

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-12">
        <div>
          <p className="text-lg text-blue-800">Start Time:</p>
          <p className="text-xl font-bold text-blue-800">00:00:00 - 12/05/2025</p>
        </div>

        {user.isadmin && (
          <div className="flex gap-2 items-end">
            <div>
              <label className="block text-blue-800 mb-1 font-medium">Set New End Time</label>
              <input
                type="datetime-local"
                value={customTime}
                onChange={(e) => setCustomTime(e.target.value)}
                className="border p-2 rounded"
              />
            </div>
            <button
              onClick={handleSubmitTime}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
            >
              Add Time
            </button>
          </div>
        )}
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
          <p className="text-xl font-bold text-blue-800">
            {endDate ? endDate.toLocaleTimeString() + ' - ' + endDate.toLocaleDateString() : 'Loading...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
