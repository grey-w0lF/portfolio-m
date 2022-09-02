const eduCardVariant = {
  initial: {
    x: 1000,
  },
  animate: {
    x: 0,
  },
};

const card1Transition = {
  delay: 0,
  duration: 0.5,
  type: "spring",
  stifness: 120,
};
const card2Transition = {
  delay: 0.3,
  duration: 0.5,
  type: "spring",
  stifness: 120,
};
const card3Transition = {
  delay: 0.5,
  duration: 0.5,
  type: "spring",
  stifness: 120,
};

export { eduCardVariant, card1Transition, card2Transition, card3Transition };
