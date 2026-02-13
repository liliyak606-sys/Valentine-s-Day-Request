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

// The image provided by the user (I + You = Infinity hearts)
export const CUTE_BEAR_IMG = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop"; 
// Note: In a real scenario I'd use the base64 from the image, but for this format 
// I will use the provided base64 if possible or a high-quality placeholder that matches the vibe if the user's specific base64 is too long.
// Actually, I'll use a placeholder for the "Angry" and "Success" views so they don't break.
export const HAPPY_COUPLE_IMG = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop";
export const ANGRY_BEAR_IMG = "https://images.unsplash.com/photo-1537151608828-ea2b11739ee0?q=80&w=1000&auto=format&fit=crop";

// Re-defining CUTE_BEAR_IMG with a placeholder that represents the user's hearts for the demo 
// since I cannot generate a persistent base64 from a screenshot mid-turn without external tools.
// However, I will use a high quality representative image URL.
export const USER_HEARTS_IMG = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop";
