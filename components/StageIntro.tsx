import React, { useState } from 'react';

interface StageIntroProps {
  onNext: () => void;
}

export const StageIntro: React.FC<StageIntroProps> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-50 p-4 [perspective:1000px] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-rose-200 animate-float opacity-50">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
        </div>
        <div className="absolute bottom-20 right-20 text-rose-200 animate-float opacity-50" style={{ animationDelay: '1s' }}>
          <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
        </div>
      </div>

      <div className="relative group cursor-pointer" onClick={() => !isOpen && setIsOpen(true)}>
        <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px]">

          {/* Envelope Back */}
          <div className="absolute inset-0 bg-rose-800 rounded-lg shadow-2xl"></div>

          {/* Card / Letter inside */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-white rounded-md shadow-md transition-all duration-1000 ease-in-out z-10 flex flex-col items-center justify-center p-6 text-center border border-rose-100
              ${isOpen ? '-translate-y-32 md:-translate-y-48' : 'top-2'}
            `}
            style={{ transitionDelay: isOpen ? '0.3s' : '0s' }}
          >
            <div className={`transition-all duration-1000 delay-500 flex flex-col items-center h-full justify-center ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="font-script text-4xl md:text-6xl text-rose-600 mb-2">Hey Prity...</h1>
              <p className="text-gray-600 text-lg md:text-xl font-sans leading-relaxed mb-6">
                Chowdhuryyy!!! I wanna ask you something, but first come with me for a recap...
              </p>

              <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full text-sm font-bold shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Lets go Lombu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Envelope Front (Pocket) - Improved visuals with gradient */}
          <div className="absolute inset-0 z-20 pointer-events-none rounded-lg overflow-hidden">
            {/* Left Triangle */}
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[150px] md:border-l-[200px] border-l-rose-600 border-t-[100px] md:border-t-[130px] border-t-transparent border-b-[100px] md:border-b-[130px] border-b-rose-600 rounded-bl-lg shadow-sm"></div>
            {/* Right Triangle */}
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[150px] md:border-r-[200px] border-r-rose-600 border-t-[100px] md:border-t-[130px] border-t-transparent border-b-[100px] md:border-b-[130px] border-b-rose-600 rounded-br-lg shadow-sm"></div>
            {/* Bottom gradient overlay for depth */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent opacity-50"></div>
          </div>

          {/* Envelope Lid */}
          <div
            className={`absolute top-0 left-0 w-full h-full origin-top transition-transform duration-700 ease-in-out`}
            style={{
              transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              zIndex: isOpen ? 0 : 30,
            }}
          >
            <div className="w-0 h-0 border-l-[150px] md:border-l-[200px] border-l-transparent border-r-[150px] md:border-r-[200px] border-r-transparent border-t-[100px] md:border-t-[130px] border-t-rose-500 relative filter drop-shadow-md">

              {/* Wax Seal */}
              <div
                className={`absolute -top-[65px] md:-top-[85px] -left-[25px] md:-left-[30px] cursor-pointer hover:scale-110 transition-transform duration-300`}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-rose-800 rounded-full flex items-center justify-center border-4 border-rose-900 shadow-xl ${!isOpen && 'animate-heartbeat'}`}>
                  {/* Inner detail of seal */}
                  <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-rose-700/50 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fecdd3"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {!isOpen && (
          <div className="text-center mt-20 animate-bounce text-rose-400 font-bold tracking-widest uppercase text-sm bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            Click the seal to open
          </div>
        )}
      </div>
    </div>
  );
};