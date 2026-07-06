const ohioCities = [
  "Franklin", "Derwent", "Felicity", "Cygnet", "Forest",
  "Enon", "Delta", "Collins", "Diamond", "Fayetteville",
  "De Graff", "Gallipolis", "Fletcher", "Coolville", "Galion",
  "Delphos", "Goshen", "Dennison", "Gates Mills", "Deshler",
  "Continental", "Fort Loramie", "Covington", "Dellroy", "East Liberty",
  "Creston", "Green", "Friendship", "Doylestown", "Croton",
  "Fleming", "Edgerton", "Farmersville", "Greenford", "Cloverdale",
  "East Canton", "Gratis", "Grand River", "Columbiana", "Garrettsville",
  "Fort Recovery", "Fayette", "Eaton", "Corning", "Gratiot",
  "Conover", "Fairlawn", "Fredericktown", "Gibsonburg", "Crooksville",
  "Dresden", "Fowler", "Franklin Furnace", "Georgetown", "East Liverpool",
  "Gnadenhutten", "Commercial Point", "Cumberland", "Germantown", "Flushing",
  "Groveport", "Greenfield", "Dalton", "Gambier", "Dunkirk",
  "Coshocton", "Dundee", "Danville", "Glouster", "Hiram",
  "Lynchburg", "Lucasville", "Magnolia", "Lake Milton", "Hebron",
  "Lisbon", "Leetonia", "Hannibal", "Madison", "Homerville",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < ohioCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(ohioCities[i]);
}

module.exports = { batches };
