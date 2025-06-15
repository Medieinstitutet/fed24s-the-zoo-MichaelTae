import { useEffect, useState } from 'react';

const FOUR_HOURS_MS = 4 * 60 * 60 * 1000;

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export const Countdown = ({ fedLast }: { fedLast: Date }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const lastFed = new Date(fedLast).getTime();
    const target = lastFed + FOUR_HOURS_MS;

    const calculateTimeLeft = () => {
      const now = Date.now();
      setTimeLeft(Math.max(0, target - now));
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [fedLast]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-lg font-bold'>Tid kvar tills nästa matning:</p>
      <p className='text-2xl font-mono'>
        {timeLeft > 0 ? formatTime(timeLeft) : 'Redo att matas!'}
      </p>
    </div>
  );
};
