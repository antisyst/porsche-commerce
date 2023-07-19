import React, { useEffect, useState } from 'react';

interface CounterProps {
  start: number;
  end: number;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = 0;
    const increment = Math.floor((end - start) / (duration * 60));

    const timer = setInterval(() => {
      startTime += increment;
      setCount(startTime);

      if (startTime >= end) {
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => {
      clearInterval(timer);
    };
  }, [start, end, duration]);

  return <span>{count}</span>;
};

export default Counter;
