import React, { useEffect, useState } from "react";
import './App.css'

function App() {
  const [currentTime, setcurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const leadingWithZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="app-container">
        <div className="title">Digital Clock</div>
        <div className="time">
          {leadingWithZero(formatHour(currentTime.getHours()))} :{" "}
          {leadingWithZero(currentTime.getMinutes())} :{" "}
          {leadingWithZero(currentTime.getSeconds())} {" "}
          {currentTime.getHours() >= 12 ? "PM" : "AM"}
        </div>
        <div className="date">{formatDate(currentTime)}</div>
      </div>
    </>
  );
}

export default App
