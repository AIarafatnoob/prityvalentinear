import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

export const StageSuccess: React.FC = () => {
  useEffect(() => {
    // Launch confetti
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-500 text-white text-center p-6">
      <div className="animate-bounce mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="white" stroke="none">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      <h1 className="text-4xl md:text-7xl font-script mb-6 drop-shadow-sm">She said YES!</h1>
      <p className="text-2xl md:text-3xl max-w-2xl font-light">
        Yeeeeeeeeeeeessssssssssss!!!! <br />
        It would've been really saddening if you said no!
      </p>

      <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
        <p className="text-lg">Im outside your home. Nie ja akta jinis please 📸</p>
      </div>
    </div>
  );
};