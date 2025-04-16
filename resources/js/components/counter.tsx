import { useState, useEffect } from 'react';

const Counter = ({ targetValue, duration, title }: { targetValue: number, duration: number, title: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetValue / (duration / 10); // how much to add per step
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        clearInterval(interval);
        setCount(targetValue);
      } else {
        setCount(Math.round(start));
      }
    }, 10); // update every 10ms

    return () => clearInterval(interval);
  }, [targetValue, duration]);

  return <div className="flex flex-col items-center font-bold bg-primary md:bg-transparent py-2 md:py-0">
            <span className="text-5xl md:text-7xl">{count}</span>
            <span className="text-xl uppercase md:text-2xl">{title}</span>
        </div>;
};

export default Counter;
