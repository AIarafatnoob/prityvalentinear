import React, { useState, useRef } from 'react';
import hp1 from './assets/hp1.jpeg';

interface StageQuestionProps {
  onYes: () => void;
}

export const StageQuestion: React.FC<StageQuestionProps> = ({ onYes }) => {
  const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({});
  const [yesScale, setYesScale] = useState(1);
  const [noText, setNoText] = useState("No");
  const noTexts = ["No", "Are you sure?", "Really?", "Think again!", "Last chance!", "Pretty please?", "Don't do this", "I'm gonna cry", "PLEASE PRITY"];
  const [noCount, setNoCount] = useState(0);

  const moveNoButton = () => {
    // Safer bounds for mobile
    const safeWidth = window.innerWidth - 120; // accounting for button width
    const safeHeight = window.innerHeight - 80; // accounting for button height

    const x = Math.max(10, Math.random() * safeWidth);
    const y = Math.max(10, Math.random() * safeHeight);

    setNoButtonStyle({
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      transition: 'all 0.2s ease', // Fast movement makes it harder to catch
      zIndex: 50 // Ensure it stays on top
    });

    setYesScale(prev => prev + 0.2);
    setNoCount(prev => prev + 1);
    setNoText(noTexts[Math.min(noCount + 1, noTexts.length - 1)]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-pink-50 overflow-hidden relative">
      <div className="text-center mb-12 z-10">
        <div className="mb-6 inline-block">
          <img
            src={hp1}
            alt="Nusrat Jahan Prity Chowdhury"
            className="w-72 h-72 rounded-full object-cover border-4 border-rose-400 shadow-2xl mx-auto mb-4"
          />
        </div>
        <h1 className="text-4xl md:text-8xl text-rose-600 mb-4 drop-shadow-sm font-script leading-tight">
          Nusrat Jahan Prity Chowdhury,
          <span className="block mt-4 text-3xl md:text-6xl">Will you be my Valentine?</span>
        </h1>
        <p className="text-gray-600 text-lg">
          I promise to get you all the cheesecake and spicy shit as you possibly could want.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 items-center justify-center z-20">
        <button
          onClick={onYes}
          style={{ transform: `scale(${yesScale})` }}
          className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-200 text-xl hover:shadow-2xl hover:brightness-110"
        >
          YES! ❤️
        </button>

        <button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton} // For mobile touch
          style={noButtonStyle}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-4 px-10 rounded-full shadow-md transition-all duration-200 text-xl whitespace-nowrap"
        >
          {noText}
        </button>
      </div>
    </div>
  );
};