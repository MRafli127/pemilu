// components/Dashboard/Countdown.jsx
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { useCountdown } from '../../context/CountdownContext';

dayjs.extend(utc);
dayjs.extend(timezone);<q></q>

import moment from 'moment';

const Countdown = () => {
  const { user } = useAuth();
  const [endDate, setEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [customTime, setCustomTime] = useState("");
  const { setIsCountdownZero } = useCountdown();

  const jakartaFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const fetchStartTime = async () => {
    try {
      const res = await axios.get('https://finpro-sbd-backend.vercel.app/countdown/read');
      const fetched = res.data.payload.created_at;
      const startTime = new Date(fetched);
      if (isNaN(startTime.getTime())) {
        console.error("Invalid start_date from server:", fetched);
        return;
      }
      setStartDate(startTime);
    } catch (err) {
      console.error("Error fetching start_time:", err);
    }
  };

  const fetchEndTime = async () => {
    try {
      const res = await axios.get('https://finpro-sbd-backend.vercel.app/countdown/read');
      const fetched = res.data.payload.end_time;
      const latestEndTime = new Date(fetched);
      if (isNaN(latestEndTime.getTime())) {
        console.error("Invalid end_date from server:", fetched);
        return;
      }
      if (!endDate || latestEndTime.getTime() !== endDate.getTime()) {
        setEndDate(latestEndTime);
      }
    } catch (err) {
      console.error("Error fetching countdown:", err);
    }
  };

  // Inside handleSubmitTime
const handleSubmitTime = async () => {
  if (!customTime) return;
  try {
    // Treat customTime as Asia/Jakarta local time
    const jakartaTime = dayjs.tz(customTime, 'Asia/Jakarta');

    console.log("Submitting Jakarta time:", jakartaTime.format());
    
    const res = await axios.post('https://finpro-sbd-backend.vercel.app/countdown/add', {
      end_time: jakartaTime.toISOString(), // sends proper UTC timestamp
    });

    const newEndDate = new Date(res.data.payload.end_time);
    setEndDate(newEndDate);
    setCustomTime("");
  } catch (err) {
    console.error("Error adding new end_time:", err);
    alert("Failed to set new end time. Please check the format.");
  }
};

  useEffect(() => {
    fetchEndTime();
    fetchStartTime();
  }, []);

  useEffect(() => {
    if (!endDate) return;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;
      if (distance < 0) {
        clearInterval(interval);
        //setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsCountdownZero(true);
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-12">
        <div>
          <p className="text-lg text-blue-800">Start Time:</p>
          <p className="text-xl font-bold text-blue-800">
            {startDate ? jakartaFormatter.format(startDate) : 'Loading...'}
          </p>
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
            {endDate ? jakartaFormatter.format(endDate) : 'Loading...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
