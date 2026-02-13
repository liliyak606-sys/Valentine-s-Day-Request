
import React, { useEffect, useState } from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react';

const COLORS = ["#ef4444", "#fb923c", "#facc15", "#4ade80", "#38bdf8", "#a78bfa", "#f472b6"];

const Confetti: React.FC = () => {
    const [pieces, setPieces] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const newPieces = Array.from({ length: 150 }).map((_, index) => {
            const style: React.CSSProperties = {
                left: `${Math.random() * 100}%`,
                animation: `fall ${Math.random() * 2 + 3}s ${Math.random() * 2}s ease-out forwards`,
                backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
                transform: `rotate(${Math.random() * 360}deg)`,
            };
            return <div key={index} className="confetti" style={style}></div>;
        });
        setPieces(newPieces);
    }, []);

    return <div className="confetti-container">{pieces}</div>;
};

const SuccessView: React.FC = () => {

  const handleDownloadGift = () => {
    // Эта функция создает и скачивает текстовый файл.
    const giftContent = "С этим файлом я дарю тебе свое сердце и обещание делать тебя счастливым(ой) каждый день. С Днем святого Валентина, моя любовь! ❤️";
    const blob = new Blob([giftContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Подарок-для-моей-Валентинки.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Confetti />
      <div className="flex flex-col items-center justify-center p-8 text-center animate-fade-in space-y-6">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center bg-white/40 backdrop-blur-sm rounded-3xl shadow-2xl border-4 border-white transform rotate-3 overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/liliyak606-sys/Valentine-s-Day-Request/refs/heads/main/Img/bdb59e68112053510d7f804cb6893609.jpg" 
                alt="Ура!" 
                className="w-full h-full object-cover"
              />
          </div>
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
          <span>14.02.2026</span>
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
    </>
  );
};

export default SuccessView;
