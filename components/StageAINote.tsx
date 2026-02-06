import React, { useState } from 'react';
import { generateLovePoem } from '../services/geminiService';

interface StageAINoteProps {
  onNext: () => void;
}

export const StageAINote: React.FC<StageAINoteProps> = ({ onNext }) => {
  const [poem, setPoem] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [generated, setGenerated] = useState<boolean>(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateLovePoem();
    // Simulate a typewriter effect if we had more time, for now just setting it
    setPoem(result);
    setLoading(false);
    setGenerated(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-rose-100 to-rose-50 text-center">
      <div className="max-w-xl w-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-rose-100">
        {!generated ? (
          <>
            <div className="mb-6">
              <span className="text-6xl">🤖 ❤️</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-script text-rose-600 mb-4">I asked an AI about us...</h2>
            <p className="text-gray-600 mb-8 font-sans">
              I told a super-intelligent AI about a guy who met a girl named Prety 7 years ago in university.
              I told it how much she means to him. Want to see what it wrote?
            </p>
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Thinking...
                </>
              ) : (
                "Generate Love Note"
              )}
            </button>
          </>
        ) : (
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="text-6xl">✨</span>
            </div>
            <h3 className="text-xl font-bold text-rose-600 mb-4 font-script text-3xl">For Prety</h3>
            <div className="bg-rose-50 p-6 rounded-lg border border-rose-200 mb-8">
              <p className="text-lg text-gray-800 italic font-serif whitespace-pre-line leading-relaxed">
                "{poem.trim()}"
              </p>
            </div>
            <p className="text-sm text-gray-500 mb-8">
              (Even the robot agrees with me)
            </p>
            <button
              onClick={onNext}
              className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all"
            >
              The Big Question &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};