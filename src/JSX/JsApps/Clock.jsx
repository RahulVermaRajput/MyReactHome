// Clock.js

import React, { useState, useEffect } from 'react';
import '../../CSS/clock.css'; // Import clock styles
import Test from '../Test';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000); // Update time every second
  
      return () => {
        clearInterval(interval); // Cleanup interval on component unmount
      };
    }, []);
  
    const getTransformStyles = () => {
      const seconds = time.getSeconds();
      const minutes = time.getMinutes();
      const hours = time.getHours();
  
      const secondDegrees = (seconds / 60) * 360;
      const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
      const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
  
      return {
        secondHand: `rotate(${secondDegrees}deg)`,
        minuteHand: `rotate(${minuteDegrees}deg)`,
        hourHand: `rotate(${hourDegrees}deg)`,
      };
    };
  
    const { secondHand, minuteHand, hourHand } = getTransformStyles();
    const dialArray = [];

    for (let i = 1; i <= 60; i++) {
      dialArray.push(<span className='dialLines' key={i} id={i} style={{transform:`rotate(${6*i}deg)`}}></span>);
    }

    return (
      <>
      <h2>asdfasd</h2>
      <div className="clock">
        <div className="dial"></div>
          {
            dialArray
          }
          <div className="hand hour-hand" style={{ transform: hourHand }} />
          <div className="hand minute-hand" style={{ transform: minuteHand }} />
          <div className="hand second-hand" style={{ transform: secondHand }} />
          <div className="center-circle" />
      
        <div className="number number-12">12</div>
          <div className="number number-3">3</div>
          <div className="number number-6">6</div>
          <div className="number number-9">9</div>
          {/* <div className="number number-1">1</div>
          <div className="number number-2">2</div>
          <div className="number number-4">4</div>
          <div className="number number-5">5</div>
          <div className="number number-7">7</div>
          <div className="number number-8">8</div>
          <div className="number number-10">10</div>
          <div className="number number-11">11</div> */}

      </div>
      <hr/><hr/>
      <Test/>
      </>
    );
  };
  


export default Clock;
