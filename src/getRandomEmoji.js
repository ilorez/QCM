function getRandomResult(num) {


  // Define 10 different result ranges and their associated emojis and messages
  const resultRanges = [
    { min: 0.0, max: 0.1, emoji: "😢", message: "Feeling sad." },
    { min: 0.1, max: 0.2, emoji: "😐", message: "Just an average day." },
    { min: 0.2, max: 0.3, emoji: "😊", message: "Feeling good!" },
    { min: 0.3, max: 0.4, emoji: "🤗", message: "You're doing great!" },
    { min: 0.4, max: 0.5, emoji: "🙂", message: "Keep smiling!" },
    { min: 0.5, max: 0.6, emoji: "😄", message: "You're awesome!" },
    { min: 0.6, max: 0.7, emoji: "🤩", message: "Fantastic work!" },
    { min: 0.7, max: 0.8, emoji: "🥳", message: "Party time!" },
    { min: 0.8, max: 0.9, emoji: "😎", message: "You're a rockstar!" },
    { min: 0.9, max: 1.0, emoji: "🚀", message: "You're on fire!" },
  ];

  // Find the matching result range for the random number
  const matchingRange = resultRanges.find((range) => num >= range.min && num <= range.max);

  if (matchingRange) {
    return matchingRange;
  }

  // If no match is found, return a default emoji and message
  return { emoji: "😊", message: "Keep going!" };
}
export default getRandomResult;