const ohioCities = [
  "Midland", "Piketon", "Ney", "North Fairfield", "Mount Blanchard",
  "Piedmont", "Newcomerstown", "Newton Falls", "Mechanicsburg", "Montville",
  "Paris", "New Marshfield", "Monroeville", "Medway", "North Jackson",
  "Mineral Ridge", "Milford Center", "New Weston", "Petersburg", "Perry",
  "North Benton", "Perrysville", "Monclova", "Mcdonald", "Ottawa",
  "Oak Hill", "Mount Sterling", "Napoleon", "North Lima", "Oberlin",
  "Oregonia", "Monroe", "Pandora", "Middleport", "New Springfield",
  "New Waterford", "Payne", "Nelsonville", "New Middletown", "Mccutchenville",
  "Peebles", "Nashville", "Milan", "Orrville", "Ottoville",
  "Navarre", "Minford", "New Knoxville", "Middlefield", "Mineral City",
  "New Bavaria", "Niles", "North Lawrence", "Pemberville", "Mount Gilead",
  "Oak Harbor", "New Lebanon", "Orangeville", "New Washington", "Northwood",
  "Orient", "Mount Orab", "Orwell", "Minerva", "North Baltimore",
  "Columbus Grove", "East Sparta", "Fostoria", "Deerfield", "Conneaut",
  "Edison", "Fort Jennings", "Frankfort", "Curtice", "East Palestine",
  "Clyde", "Genoa", "Elmore", "Frazeysburg", "Glenford",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < ohioCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(ohioCities[i]);
}

module.exports = { batches };
