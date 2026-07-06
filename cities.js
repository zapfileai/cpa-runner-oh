const ohioCities = [
  "Hicksville", "Heath", "Harrod", "Houston", "Jackson",
  "Jeromesville", "Hamler", "Hamersville", "Ironton", "Lewisville",
  "Hopewell", "Irwin", "Leavittsburg", "Malinta", "Lodi",
  "Magnetic Springs", "Liberty Center", "Jackson Center", "Kingston", "Lagrange",
  "Marengo", "Jewett", "Mantua", "Marshallville", "Little Hocking",
  "Homeworth", "Kelleys Island", "Haskins", "Maria Stein", "Lindsey",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < ohioCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(ohioCities[i]);
}

module.exports = { batches };
