import { useState, useEffect } from "react";

function calculateElapsed(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  if (isNaN(start.getTime()) || start > now) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days, hours, minutes, seconds };
}

export function useLiveTimer(startDate) {
  const [elapsed, setElapsed] = useState(() => calculateElapsed(startDate));

  useEffect(() => {
    setElapsed(calculateElapsed(startDate));
    const interval = setInterval(() => {
      setElapsed(calculateElapsed(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return elapsed;
}
