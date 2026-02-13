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
  { text: "Я уже купил кольцо...", color: "bg-slate-900" },
  { text: "Это твоя последняя ошибка", color: "bg-black" },
  { text: "Сдавайся!", color: "bg-black" },
  { text: "Ты меня поймал(а)...", color: "bg-black" },
];

export const ANGRY_MODAL_THRESHOLD = 8;
export const STOP_RUNNING_THRESHOLD = 15;

export const CUTE_BEAR_IMG = "https://raw.githubusercontent.com/liliyak606-sys/Valentine-s-Day-Request/refs/heads/main/img/8bb1c56084c8a24d9ee9f972556fae73.jpg"; 
export const HAPPY_COUPLE_IMG = "https://raw.githubusercontent.com/liliyak606-sys/Valentine-s-Day-Request/refs/heads/main/img/80066465df6d617a75c3b7b1e6e40034.jpg";
export const ANGRY_MODAL_IMG = "https://raw.githubusercontent.com/liliyak606-sys/Valentine-s-Day-Request/refs/heads/main/img/0fabbd6af8558c9c997ed612f4c56f48.jpg";
export const USER_HEARTS_IMG = "https://raw.githubusercontent.com/liliyak606-sys/Valentine-s-Day-Request/refs/heads/main/img/8bb1c56084c8a24d9ee9f972556fae73.jpg";