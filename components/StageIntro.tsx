import React, { useState } from 'react';

interface StageIntroProps {
  onNext: () => void;
}

export const StageIntro: React.FC<StageIntroProps> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 [perspective:1000px] overflow-hidden relative">
      {/* Background decoration - Abstract Roses/Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-rose-300 animate-float opacity-60">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
        </div>
        <div className="absolute bottom-20 right-20 text-rose-400 animate-float opacity-60" style={{ animationDelay: '1s' }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
        </div>
        <div className="absolute top-1/4 right-10 text-red-300 animate-float opacity-40" style={{ animationDelay: '2s' }}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
        </div>
      </div>

      <div className="relative group cursor-pointer" onClick={() => !isOpen && setIsOpen(true)}>
        <div className="relative w-[320px] h-[220px] md:w-[380px] md:h-[250px]">

          {/* Envelope Back */}
          <div className="absolute inset-0 bg-red-700 rounded-lg shadow-2xl"></div>

          {/* Card / Letter inside */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-white rounded-md shadow-md transition-all duration-1000 ease-in-out z-10 flex flex-col items-center justify-center p-6 text-center border border-red-100
              ${isOpen ? '-translate-y-48 md:-translate-y-64' : 'top-2'}
            `}
            style={{ transitionDelay: isOpen ? '0.3s' : '0s' }}
          >
            <div className={`transition-all duration-1000 delay-500 flex flex-col items-center h-full justify-center ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="font-script text-4xl md:text-4xl text-red-600 mb-2">Hey Prity...</h1>
              <p className="text-gray-600 text-base md:text-lg font-sans leading-relaxed mb-4">
                Chowdhuryyy!!! I wanna ask you something, but first come with me for a recap...
              </p>

              <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm font-bold shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 cursor-pointer z-50 pointer-events-auto"
              >
                <span>Lets go Lombu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Envelope Front (Pocket) */}
          <div className="absolute inset-0 z-20 pointer-events-none rounded-lg overflow-hidden">
            {/* Left Triangle */}
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[160px] md:border-l-[210px] border-l-red-600 border-t-[110px] md:border-t-[140px] border-t-transparent border-b-[110px] md:border-b-[140px] border-b-red-600 rounded-bl-lg shadow-sm"></div>
            {/* Right Triangle */}
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[160px] md:border-r-[210px] border-r-red-600 border-t-[110px] md:border-t-[140px] border-t-transparent border-b-[110px] md:border-b-[140px] border-b-red-600 rounded-br-lg shadow-sm"></div>
            {/* Gradient for depth */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Envelope Lid */}
          <div
            className={`absolute top-0 left-0 w-full h-full origin-top transition-transform duration-700 ease-in-out`}
            style={{
              transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              zIndex: isOpen ? 0 : 30, // Drop behind when open
            }}
          >
            <div className="w-0 h-0 border-l-[160px] md:border-l-[210px] border-l-transparent border-r-[160px] md:border-r-[210px] border-r-transparent border-t-[110px] md:border-t-[140px] border-t-red-500 relative filter drop-shadow-md">

              {/* Heart Seal */}
              <div
                className={`absolute -top-[80px] md:-top-[100px] -left-[20px] md:-left-[25px] cursor-pointer hover:scale-110 transition-transform duration-300 ${!isOpen && 'animate-pulse'}`}
              >
                <svg width="40" height="40" md:width="50" md:height="50" viewBox="0 0 24 24" fill="#991b1b" className="drop-shadow-lg transform scale-150">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="white" strokeWidth="1" />
                </svg>
              </div>

            </div>
          </div>
        </div>

        {!isOpen && (
          <div className="text-center mt-24 animate-bounce text-red-500 font-bold tracking-widest uppercase text-sm bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            Click the heart to open
          </div>
        )}
      </div>
    </div>
  );
};