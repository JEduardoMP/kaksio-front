export const randomSelect = (length) => {
  const idxContainer = [];
  do {
    const randomIdx = Math.floor(Math.random() * length);
    if (idxContainer.length === 0) {
      idxContainer.push(randomIdx);
    }
    if (idxContainer.includes(randomIdx) === false) {
      idxContainer.push(randomIdx);
    }
  } while (idxContainer.length < 4);
  return idxContainer;
};
