import React from 'react';
import { AlertTriangle, Skull } from 'lucide-react';

interface AngryModalProps {
  onClose: () => void;
  count: number;
}

const AngryModal: React.FC<AngryModalProps> = ({ onClose, count }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-red-950 border-4 border-red-600 rounded-lg p-6 max-w-md w-full shadow-2xl animate-shake relative overflow-hidden">
        {/* Scary background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 transform rotate-45 bg-red-500 w-20 h-96"></div>
          <div className="absolute bottom-10 right-10 transform -rotate-45 bg-red-500 w-20 h-96"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <div className="bg-red-600 p-4 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.7)] animate-pulse">
            <Skull className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-3xl font-black text-red-500 uppercase tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            ПРЕДУПРЕЖДЕНИЕ!
          </h2>

          <p className="text-white font-bold text-lg">
            Если ты нажмешь "НЕТ" еще раз... <br/>
            <span className="text-red-500 text-xl block mt-2">Я ТЕБЯ НАЙДУ! 👁️</span>
            <span className="text-xs text-gray-400 block mt-1">(Подумай очень хорошо)</span>
          </p>

          <button
            onClick={onClose}
            className="mt-4 px-8 py-3 bg-white text-red-900 font-black rounded hover:bg-gray-200 transition-colors uppercase tracking-wider flex items-center gap-2"
          >
            <AlertTriangle className="w-5 h-5" />
            Я понял(а)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AngryModal;