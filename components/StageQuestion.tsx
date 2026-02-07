import React from 'react';
import hp1 from './assets/hp1.jpeg';

interface StageQuestionProps {
  onYes: () => void;
}

export const StageQuestion: React.FC<StageQuestionProps> = ({ onYes }) => {
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
        <h1 className="text-4xl md:text-6xl text-rose-600 mb-4 drop-shadow-sm font-script leading-tight">
          Nusrat Jahan Prity Chowdhury,
          <span className="block mt-4 text-3xl md:text-4xl">Will you be my Valentine?</span>
        </h1>
        <p className="text-gray-600 text-lg">
          I promise to get you all the cheesecake and spicy shit as you possibly could want.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 items-center justify-center z-20">
        <button
          onClick={onYes}
          className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-200 text-xl hover:shadow-2xl hover:brightness-110 flex items-center gap-3"
        >
          <span>See Your Answer</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};