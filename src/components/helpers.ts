export const getTierUrl = (textTier: String) => {
  const tier = textTier.replace(" ", "").toLowerCase();
  return `https://blitz-cdn-plain.blitz.gg/blitz/val/ranks/${tier}.svg?v=2.2`;
};
