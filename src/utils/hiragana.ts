// src/utils/hiragana.ts

export const CHARACTERS = [
  "あ",
  "い",
  "う",
  "え",
  "お",
  "か",
  "き",
  "く",
  "け",
  "こ",
  "さ",
  "し",
  "す",
  "せ",
  "そ",
  "た",
  "ち",
  "つ",
  "て",
  "と",
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "は",
  "ひ",
  "ふ",
  "へ",
  "ほ",
  "ま",
  "み",
  "む",
  "め",
  "も",
  "や",
  "ゆ",
  "よ",
  "ら",
  "り",
  "る",
  "れ",
  "ろ",
  "わ",
  "を",
  "ん",
];

// Dynamically load all audio files from `src/audio`
const audioFiles = import.meta.glob("../audio/*.ogg", { eager: true });

// Romanized names corresponding to Hiragana characters
const ROMANIZED = [
  "a",
  "i",
  "u",
  "e",
  "o",
  "ka",
  "ki",
  "ku",
  "ke",
  "ko",
  "sa",
  "shi",
  "su",
  "se",
  "so",
  "ta",
  "chi",
  "tsu",
  "te",
  "to",
  "na",
  "ni",
  "nu",
  "ne",
  "no",
  "ha",
  "hi",
  "fu",
  "he",
  "ho",
  "ma",
  "mi",
  "mu",
  "me",
  "mo",
  "ya",
  "yu",
  "yo",
  "ra",
  "ri",
  "ru",
  "re",
  "ro",
  "wa",
  "wo",
  "n",
];

// Map Hiragana characters to their corresponding audio paths
export const HIRAGANA_AUDIO: Record<string, string> = CHARACTERS.reduce(
  (acc, char, index) => {
    const romanizedName = ROMANIZED[index]; // Map Hiragana to its Romanized name
    const audioPath = `../audio/${romanizedName}.ogg`; // Construct the file path
    const module = audioFiles[audioPath];

    if (module && typeof module === "object" && "default" in module) {
      acc[char] = module.default; // Use the `default` property for the file path
    } else {
      console.error(
        `Audio file not found or invalid module for character: ${char}`
      );
    }

    return acc;
  },
  {} as Record<string, string>
);
