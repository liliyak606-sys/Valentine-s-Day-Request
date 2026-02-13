import React from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { HAPPY_COUPLE_IMG } from '../constants';

const SuccessView: React.FC = () => {

  const handleDownloadGift = () => {
    // Эта функция создает и скачивает текстовый файл.
    // Когда вы предоставите настоящий файл, я заменю эту логику.
    const giftContent = "Это твой подарок! Спасибо, что ты моя валентинка! ❤️";
    const blob = new Blob([giftContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Подарок-для-тебя.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-fade-in space-y-6">
      <div className="relative">
        <img 
          src={HAPPY_COUPLE_IMG} 
          alt="Happy celebration" 
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-4 border-white transform rotate-3"
        />
        <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
          <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-bounce" />
        </div>
      </div>

      <div className="space-y-4 max-w-lg">
        <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-md">
          УРАААА! 🎉
        </h1>
        <p className="text-xl md:text-2xl font-bold text-white/90">
          Я знал(а), что ты согласишься! <br/>
          Ты лучшая валентинка в мире! ❤️
        </p>
      </div>

      <div className="flex gap-2 text-white/80">
        <Sparkles className="animate-spin-slow" />
        <span>14.02.2024</span>
        <Sparkles className="animate-spin-slow" />
      </div>

      <button
        onClick={handleDownloadGift}
        className="mt-6 px-8 py-4 bg-purple-600 text-white font-black rounded-lg hover:bg-purple-700 transition-transform hover:scale-105 shadow-lg flex items-center gap-3 text-xl w-full max-w-xs justify-center"
      >
        <Gift className="w-7 h-7" />
        Забери свой подарок!
      </button>

    </div>
  );
};

export default SuccessView;