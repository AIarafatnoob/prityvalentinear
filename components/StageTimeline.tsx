import React, { useEffect, useRef, useState } from 'react';

interface StageTimelineProps {
  onNext: () => void;
}

const SCENES = [
  {
    id: 'meeting',
    year: '2017',
    title: 'The Meeting',
    text: "I've probably told you this like a million times, but the day I saw you being the full of life person you are roaming around the middle of the campus will forever be etched in my forgetfull mind. I wish I could relive that moment again and again!",
    bg: 'bg-blue-50'
  },
  {
    id: 'fun',
    year: 'The Best Days',
    title: 'Every Moment I Have Spent With You',
    text: "Most of my life I have had to push myself to be happy, but being with you, having you in front of me puts my happiness into auto drive. Tor khoma ta dekhlei amr mone hoi er theke happy howa to possible na bhai",
    bg: 'bg-yellow-50'
  },
  {
    id: 'disconnect',
    year: 'The Drift',
    title: 'Life Happened',
    text: "However, fate had other plans. I know that you will never admit it, but I know I hurt you. And I hope that you will believe me that hurting you was never my intention. Bokchod ami akta! But kisu to valo korsilam hoito je you still found the heart to keep in touch. And I want you to know je Ami Toke Kono Din e Vuli Nai.",
    bg: 'bg-slate-100'
  },
  {
    id: 'reconnect',
    year: 'The End Game',
    title: 'The last Chance',
    text: "I know that guy hurt you a lot. But I am also selfish enough about you to realize that fate had given me another chance to at least try and make you mine. And so I shall, no matter how much you ignore me, 'say, Lombu no sex', 'I don't know what you are to me', fuck all that! I truly believe fate wants us to be together, and let god be my witness, I will do whatever it takes to make that happen.",
    bg: 'bg-green-50'
  },
  {
    id: 'realization',
    year: 'Now',
    title: 'The Truth',
    text: "It hit me all at once. It's not about the past. It's about who I want my future with. You might not believe this, but I've not asked this question to anyone ever",
    bg: 'bg-rose-50'
  }
];

export const StageTimeline: React.FC<StageTimelineProps> = ({ onNext }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const children = scrollRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => observer.observe(child as Element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1.5 bg-rose-500 transition-all duration-300 z-50 ease-out" style={{ width: `${((activeIndex + 1) / SCENES.length) * 100}%` }} />

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory h-full w-full scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {SCENES.map((scene, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={scene.id}
              data-index={index}
              className={`flex-shrink-0 w-full h-full snap-center flex flex-col items-center justify-start pt-20 md:pt-24 p-6 md:p-8 transition-colors duration-700 ${scene.bg} relative overflow-hidden`}
            >
              {/* Background Decoration */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-[10%] left-[5%] animate-float text-rose-300" style={{ animationDelay: '0s' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                </div>
                <div className="absolute top-[60%] right-[10%] animate-float text-rose-300" style={{ animationDelay: '1.5s' }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                </div>
                <div className="absolute bottom-[20%] left-[15%] animate-float text-rose-300" style={{ animationDelay: '0.7s' }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                </div>
              </div>

              {/* Animation Stage */}
              <div className="w-full max-w-2xl h-64 mb-8 relative flex items-center justify-center">

                {/* Scene 1: Meeting */}
                {scene.id === 'meeting' && (
                  <>
                    <div className={`absolute left-[10%] w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl shadow-xl border-4 border-white transition-all duration-[1500ms] ease-out ${isActive ? 'translate-x-[20vw] lg:translate-x-[150px]' : 'translate-x-0'}`}>
                      🧑
                    </div>
                    <div className={`absolute right-[10%] w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center text-white text-3xl shadow-xl border-4 border-white transition-all duration-[1500ms] ease-out ${isActive ? '-translate-x-[20vw] lg:-translate-x-[150px]' : '-translate-x-0'}`}>
                      👩
                    </div>
                    <div className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 delay-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                      <span className="text-4xl animate-pulse">⚡</span>
                    </div>
                  </>
                )}

                {/* Scene 2: Fun */}
                {scene.id === 'fun' && (
                  <div className={`flex gap-6 transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg border-4 border-white animate-bounce" style={{ animationDuration: '0.8s' }}>🧑</div>
                    <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg border-4 border-white animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '0.1s' }}>👩</div>
                    {isActive && (
                      <>
                        <div className="absolute -top-10 -right-10 text-4xl animate-bounce delay-75">🎵</div>
                        <div className="absolute top-20 -left-10 text-4xl animate-bounce delay-150">🍕</div>
                        <div className="absolute -top-10 left-10 text-4xl animate-bounce delay-300">😂</div>
                      </>
                    )}
                  </div>
                )}

                {/* Scene 3: Disconnect */}
                {scene.id === 'disconnect' && (
                  <>
                    <div className={`absolute transition-all duration-[2000ms] ease-in-out ${isActive ? 'left-[10%] opacity-60 grayscale' : 'left-[35%] opacity-100'}`}>
                      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl border-4 border-white">🧑</div>
                    </div>
                    <div className={`absolute transition-all duration-[2000ms] ease-in-out ${isActive ? 'right-[10%] opacity-60 grayscale' : 'right-[35%] opacity-100'}`}>
                      <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center text-white text-3xl border-4 border-white">👩</div>
                    </div>
                    <div className={`absolute h-full w-0.5 bg-gray-300 border-r-2 border-dashed border-gray-400 transition-all duration-1000 ${isActive ? 'h-40 opacity-100' : 'h-0 opacity-0'}`}></div>
                    {isActive && <div className="absolute bg-white px-2 text-gray-400 text-sm font-bold tracking-widest">DISTANCE</div>}
                  </>
                )}

                {/* Scene 4: Reconnect */}
                {scene.id === 'reconnect' && (
                  <>
                    <div className={`absolute transition-all duration-[1500ms] ${isActive ? 'left-[30%]' : 'left-0 opacity-0'}`}>
                      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl border-4 border-white">🧑</div>
                    </div>
                    <div className={`absolute transition-all duration-[1500ms] ${isActive ? 'right-[30%]' : 'right-0 opacity-0'}`}>
                      <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center text-white text-3xl border-4 border-white">👩</div>
                    </div>
                    {isActive && (
                      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                        <div className="animate-[ping_1s_ease-in-out_infinite] bg-green-500 w-3 h-3 rounded-full"></div>
                        <div className="bg-white border shadow-md px-3 py-1 rounded-full text-xs animate-pulse">New Message</div>
                      </div>
                    )}
                  </>
                )}

                {/* Scene 5: Realization */}
                {scene.id === 'realization' && (
                  <div className="relative">
                    <div className={`w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-5xl border-4 border-white transition-all duration-[800ms] z-10 relative ${isActive ? 'scale-125 shadow-2xl' : 'scale-100'}`}>
                      😲
                    </div>
                    {isActive && (
                      <>
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-6xl animate-bounce drop-shadow-md">❤️</div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/10 rounded-full animate-ping -z-0"></div>
                      </>
                    )}
                  </div>
                )}

              </div>

              {/* Text Content */}
              <div className={`text-center max-w-2xl px-6 md:px-8 py-8 md:py-10 z-10 transition-all duration-1000 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} bg-white/25 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] border border-white/40 shadow-[0_8px_32px_0_rgba(255,182,193,0.3)] saturate-150 relative`}>
                <span className="inline-block px-4 py-1.5 bg-rose-100 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] text-rose-500 mb-4 md:mb-6 uppercase shadow-inner">{scene.year}</span>
                {index === SCENES.length - 1 && <h1 className="font-script text-3xl md:text-5xl text-rose-600 mb-2">Hey Prity...</h1>}
                <h2 className="text-3xl md:text-5xl text-gray-800 mb-4 md:mb-6 font-script leading-tight">{scene.title}</h2>
                <p className={`text-lg md:text-xl text-gray-600 leading-relaxed font-sans ${index === SCENES.length - 1 ? 'mb-8 md:mb-10' : ''}`}>{scene.text}</p>

                {/* Final Button integrated into container */}
                {index === SCENES.length - 1 && (
                  <button
                    onClick={onNext}
                    className="group relative px-8 md:px-10 py-4 md:py-5 bg-rose-600 text-white rounded-full font-bold text-lg md:text-xl shadow-xl hover:bg-rose-700 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto"
                  >
                    <span>The Question?</span>
                    <svg width="20" height="20" md:width="24" md:height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    <div className="absolute inset-0 rounded-full ring-4 ring-rose-400 ring-opacity-50 animate-pulse"></div>
                  </button>
                )}
              </div>

              {/* Swipe Next Hint (absolute bottom right as requested) */}
              {index < SCENES.length - 1 && (
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 animate-bounce z-20 flex items-center gap-2 md:gap-3 text-rose-400 bg-white/80 backdrop-blur-md px-4 py-2 md:px-5 md:py-3 rounded-full shadow-lg border border-rose-50 group hover:scale-110 transition-transform">
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em]">SWIPE NEXT</span>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-md">
                    <svg width="14" height="14" md:width="18" md:height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};