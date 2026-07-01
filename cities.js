const ohioCities = [
  "Brookfield", "Lewis Center", "Swanton", "Columbia Station", "Granville",
  "North Canton", "Lewisburg", "Canfield", "Bethel", "Brecksville",
  "Berlin Heights", "Bellaire", "Antwerp", "Ada", "Broadview Heights",
  "Austinburg", "Alexandria", "Carbon Hill", "Bloomville", "Amanda",
  "Brookpark", "Attica", "Cardington", "Avon Lake", "Sylvania",
  "Valley City", "Wadsworth", "Bryan", "Ashland", "Carey",
  "Berea", "Bellbrook", "Barberton", "Cadiz", "Casstown",
  "Belpre", "Avon", "Beloit", "Barnesville", "Camp Dennison",
  "Bath", "Burgoon", "Batavia", "Brookville", "Alpha",
  "Carroll", "Belmont", "Bolivar", "Caledonia", "Aurora",
  "Chatfield", "Belle Center", "Ashtabula", "Beverly", "Burton",
  "Bergholz", "Buchtel", "Atwater", "Ashville", "Beaver",
  "Chardon", "Clayton", "Alliance", "Celina", "Bay Village",
  "Bellefontaine", "Cedarville", "Bucyrus", "Andover", "Bowling Green",
  "Anna", "Washingtonville", "Willshire", "West Portsmouth", "Van Wert",
  "Wakeman", "Wharton", "Waterville", "West Milton", "West Chester",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < ohioCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(ohioCities[i]);
}

module.exports = { batches };
