const ohioCities = [
  // ← paste your city list here
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < ohioCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(ohioCities[i]);
}

module.exports = { batches };
