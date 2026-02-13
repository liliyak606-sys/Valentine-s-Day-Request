import { PhraseConfig } from './types';

// Phrases that appear on the "No" button or as warnings
export const REJECTION_PHRASES: PhraseConfig[] = [
  { text: "Нет", color: "bg-rose-500" },
  { text: "Ты уверен?", color: "bg-rose-600" },
  { text: "Серьезно?", color: "bg-orange-500" },
  { text: "Подумай еще раз!", color: "bg-red-500" },
  { text: "Не надо так...", color: "bg-red-600" },
  { text: "Я буду плакать 😭", color: "bg-red-700" },
  { text: "Ты разбиваешь мне сердце 💔", color: "bg-red-800" },
  { text: "Я РАЗОЗЛЮСЬ!", color: "bg-red-900" }, // 8th phrase triggers angry modal logic
  { text: "Последний шанс!", color: "bg-purple-800" },
  { text: "Моя мама тебя полюбит!", color: "bg-indigo-800" },
  { text: "Ну пожалуйстаааа", color: "bg-gray-800" },
  { text: "я уже купила тортик...", color: "bg-slate-900" },
  { text: "Это твоя последняя ошибка", color: "bg-black" },
  { text: "Сдавайся!", color: "bg-black" },
  { text: "Ты меня поймал(а)...", color: "bg-black" },
];

export const ANGRY_MODAL_THRESHOLD = 8;
export const STOP_RUNNING_THRESHOLD = 15;