
import React, { useEffect } from 'react';
import { HeartCrack, ShieldAlert } from 'lucide-react';

interface FinalRejectionModalProps {
  onConfirm: () => void;
}

const FinalRejectionModal: React.FC<FinalRejectionModalProps> = ({ onConfirm }) => {
  useEffect(() => {
    // Самая мощная вибрация для финального окна
    if ('vibrate' in navigator) {
      navigator.vibrate([500, 200, 500, 200, 800]);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in">
      <div className="bg-slate-900 border-4 border-rose-500 rounded-xl p-8 max-w-lg w-full shadow-2xl shadow-rose-500/20 relative text-center flex flex-col items-center space-y-6">
        
        <div className="absolute -top-8 bg-slate-800 border-4 border-rose-500 p-4 rounded-full">
            <HeartCrack className="w-12 h-12 text-rose-500" />
        </div>

        <h2 className="text-4xl font-black text-white drop-shadow-[0_2px_2px_rgba(225,29,72,0.8)] pt-8">
          Это твой окончательный ответ?
        </h2>

        <p className="text-gray-300 font-semibold text-lg max-w-md">
          Ты прошел(а) весь этот путь, только чтобы сказать "Нет"? Последствия могут быть... 
          <span className="text-rose-400 font-bold block mt-2 text-xl">непредсказуемыми.</span>
        </p>

        <div className="bg-rose-900/50 border border-rose-700 p-4 rounded-lg text-rose-300 w-full">
            <p className="font-bold text-2xl uppercase">Передумай немедленно!</p>
        </div>
        
        <button
          onClick={onConfirm}
          className="mt-4 px-8 py-4 bg-green-500 text-white font-black rounded-lg hover:bg-green-600 transition-transform hover:scale-105 uppercase tracking-wider flex items-center gap-3 text-xl w-full justify-center"
        >
          <ShieldAlert className="w-7 h-7" />
          Прости, я согласен(а)!
        </button>
      </div>
    </div>
  );
};

export default FinalRejectionModal;
