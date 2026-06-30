const ohioCities = [
  "Hinckley", "Chillicothe", "Galloway", "Stow", "Cleveland",
  "Columbus", "Beachwood", "Clarksville", "Brewster", "Brilliant",
  "Camden", "Archbold", "Bedford", "Oakwood Village", "Canton",
  "Brunswick", "Bidwell", "Canal Winchester", "Bellevue", "Bainbridge",
  "Circleville", "Beallsville", "Cambridge", "Amherst", "Baltimore",
  "Bradford", "Berkey", "Bridgeport", "Arlington", "Blanchester",
  "Botkins", "Apple Creek", "Bethesda", "Butler", "Akron",
  "Carrollton", "Chickasaw", "Beach City", "Canal Fulton", "Campbell",
  "Athens", "Albany", "Chagrin Falls", "Chesapeake", "Castalia",
  "Bristolville", "Amelia", "Bluffton", "Byesville", "Berlin Center",
  "Blacklick", "Centerburg", "Chauncey", "Chippewa Lake", "Bellville",
  "Arcanum", "Cincinnati", "Olmsted Falls", "Tallmadge", "Caldwell",
  "Whitehouse", "Dublin", "Kingsville", "Mount Vernon", "Hilliard",
  "Springboro", "Chesterland", "Westerville", "Willoughby", "Strongsville",
  "North Bend", "New Philadelphia", "New Concord", "Piqua", "Delaware",
  "Englewood", "Buckland", "Ansonia", "Bremen", "Arcadia",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < ohioCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(ohioCities[i]);
}

module.exports = { batches };
