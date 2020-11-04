let maxCalcNums = [
  { reps: 1, percent: 1 },
  { reps: 2, percent: 0.97 },
  { reps: 3, percent: 0.94 },
  { reps: 4, percent: 0.92 },
  { reps: 5, percent: 0.89 },
  { reps: 6, percent: 0.86 },
  { reps: 7, percent: 0.83 },
  { reps: 8, percent: 0.81 },
  { reps: 9, percent: 0.78 },
  { reps: 10, percent: 0.75 },
  { reps: 11, percent: 0.73 },
  { reps: 12, percent: 0.71 },
  { reps: 13, percent: 0.7 },
  { reps: 14, percent: 0.68 },
  { reps: 15, percent: 0.67 },
  { reps: 16, percent: 0.65 },
  { reps: 17, percent: 0.64 },
  { reps: 18, percent: 0.63 },
  { reps: 19, percent: 0.61 },
  { reps: 20, percent: 0.6 },
  { reps: 21, percent: 0.59 },
  { reps: 22, percent: 0.58 },
  { reps: 23, percent: 0.57 },
  { reps: 24, percent: 0.56 },
  { reps: 25, percent: 0.55 },
  { reps: 26, percent: 0.54 },
  { reps: 27, percent: 0.53 },
  { reps: 28, percent: 0.52 },
  { reps: 29, percent: 0.51 },
  { reps: 30, percent: 0.5 },
];
// divide rep weight number by percent to get 1rm

// simply add asyn before setweights () to make promise return on whatever page uses these
export const CalcMax = ({ setWeights }) => {
  let highestMax = 0;
  console.log(setWeights);
  setWeights.forEach((set, index) => {
    console.log(set);
    let percent = maxCalcNums.find(key => key.reps === set.reps).percent;
    let max = set.weight / percent;
    if (max > highestMax) {
      highestMax = max;
    }
  });
  return highestMax;
};
