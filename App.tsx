import React, { useState, useRef } from 'react';
import { Heart, Smile } from 'lucide-react';
import SuccessView from './components/SuccessView';
import AngryModal from './components/AngryModal';
import FinalRejectionModal from './components/FinalRejectionModal';
import { GameState, Position } from './types';
import { REJECTION_PHRASES, ANGRY_MODAL_THRESHOLD, CUTE_BEAR_IMG, STOP_RUNNING_THRESHOLD } from './constants';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.ASKING);
  const [noCount, setNoCount] = useState<number>(0);
  const [noBtnPosition, setNoBtnPosition] = useState<Position>({ top: 'auto', left: 'auto' });
  const [showAngryModal, setShowAngryModal] = useState<boolean>(false);
  const [showFinalModal, setShowFinalModal] = useState<boolean>(false);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    setGameState(GameState.SUCCESS);
  };

  const handleFinalConfirm = () => {
    setGameState(GameState.SUCCESS);
    setShowFinalModal(false);
  };

  const handleNoInteraction = () => {
    if (noCount >= STOP_RUNNING_THRESHOLD) {
      setShowFinalModal(true);
      return;
    }

    if (!cardRef.current || !noButtonRef.current) return;
    
    const newCount = noCount + 1;
    setNoCount(newCount);

    if (newCount === ANGRY_MODAL_THRESHOLD) {
      setShowAngryModal(true);
    }

    const cardRect = cardRef.current.getBoundingClientRect();
    const btnRect = noButtonRef.current.getBoundingClientRect();
    
    // Определяем безопасную зону внутри карточки (учитываем паддинги ~32px)
    const padding = 32;
    const maxLeft = cardRect.width - btnRect.width - padding;
    const maxTop = cardRect.height - btnRect.height - padding;

    const randomLeft = Math.max(padding, Math.random() * maxLeft);
    const randomTop = Math.max(padding, Math.random() * maxTop);

    setNoBtnPosition({ top: randomTop, left: randomLeft });
  };

  const getRejectionPhrase = () => {
    const index = Math.min(noCount, REJECTION_PHRASES.length - 1);
    return REJECTION_PHRASES[index];
  };

  const currentPhrase = getRejectionPhrase();

  return (
    <div className={`min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700 ${noCount >= 12 ? 'bg-slate-900' : 'bg-rose-200'}`}>
      
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 text-rose-300 animate-pulse"><Heart size={40} fill="currentColor" /></div>
        <div className="absolute top-1/4 right-20 text-rose-400 animate-bounce"><Heart size={30} fill="currentColor" /></div>
        <div className="absolute bottom-20 left-1/3 text-pink-300 animate-pulse delay-75"><Heart size={50} fill="currentColor" /></div>
        <div className="absolute top-1/2 right-10 text-rose-300 animate-pulse delay-150"><Heart size={24} fill="currentColor" /></div>
      </div>

      <div 
        className="w-full max-w-2xl min-h-[600px] flex flex-col items-center justify-center p-4"
      >
        {gameState === GameState.SUCCESS ? (
          <SuccessView />
        ) : (
          <div 
            ref={cardRef}
            className="relative w-full max-w-md bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-4 border-white flex flex-col items-center text-center space-y-8 z-10 transition-all duration-300"
          >
            
            <div className="relative group w-full flex justify-center">
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-400 to-orange-300 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop" 
                alt="Я и Ты" 
                className="relative w-64 h-64 rounded-3xl object-cover border-4 border-white shadow-lg bg-white"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = CUTE_BEAR_IMG;
                }}
              />
              <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow border border-rose-100">
                <Smile className="w-6 h-6 text-rose-500" />
              </div>
            </div>

            <h1 className="text-3xl font-black text-gray-800 leading-tight">
              Ты будешь моей валентинкой? 🥺
            </h1>

            {/* Мы убрали 'relative' у этого контейнера, чтобы 'absolute' кнопка 'Нет' позиционировалась относительно всей карточки (cardRef) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full h-32">
              
              <button
                onClick={handleYesClick}
                style={{ transform: `scale(${1 + (noCount * 0.15)})` }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2 z-20 origin-center active:scale-95"
              >
                ДА! ❤️
              </button>

              <button
                ref={noButtonRef}
                onMouseEnter={handleNoInteraction}
                onClick={handleNoInteraction}
                style={{
                  position: noCount > 0 ? 'absolute' : 'static',
                  top: noCount > 0 ? noBtnPosition.top : 'auto',
                  left: noCount > 0 ? noBtnPosition.left : 'auto',
                  transition: 'top 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                className={`${currentPhrase.color || 'bg-rose-500'} text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-200 z-30 whitespace-nowrap hover:shadow-xl active:scale-90`}
              >
                {currentPhrase.text}
              </button>
            </div>
          </div>
        )}
      </div>

      {showAngryModal && (
        <AngryModal 
          count={noCount} 
          onClose={() => setShowAngryModal(false)} 
        />
      )}

      {showFinalModal && (
          <FinalRejectionModal onConfirm={handleFinalConfirm} />
      )}
    </div>
  );
};

export default App;