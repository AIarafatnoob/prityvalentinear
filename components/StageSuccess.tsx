import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import yesPhoto from './assets/yes.jpeg';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-500 text-white text-center p-6 overflow-hidden">
      <div className="animate-bounce mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="white" stroke="none">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      <h1 className="text-4xl md:text-6xl font-script mb-2 drop-shadow-sm">She said YES!</h1>
      <div className="animate-fade-in-up delay-300 mb-8 inline-block">
        <div className="bg-white/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/30 shadow-lg transform hover:scale-105 transition-all duration-300">
          <p className="text-2xl md:text-4xl text-white font-script tracking-wide flex items-center gap-3">
            <span className="text-2xl">📅</span> 7th Feb, 2025
          </p>
        </div>
      </div>

      {/* Photo Frame */}
      <div className="mb-10 animate-fade-in-up delay-500 transform rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer">
        <div className="bg-white p-3 md:p-4 pb-12 md:pb-16 shadow-2xl rounded-sm max-w-[280px] md:max-w-sm mx-auto relative group">
          <div className="absolute -top-3 -right-3 z-20 text-4xl group-hover:scale-110 transition-transform">📌</div>
          <div className="overflow-hidden rounded-sm border border-gray-100">
            <img
              src={yesPhoto}
              alt="Forever Us"
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <p className="text-rose-500 font-script text-3xl md:text-4xl absolute bottom-4 left-0 right-0 rotate-[-1deg] opacity-90">Forever & Always ❤️</p>
        </div>
      </div>

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