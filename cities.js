const ohioCities = [
  "Johnstown", "Harrison", "Lakeville", "Kitts Hill", "Lancaster",
  "Lakewood", "Irondale", "Fremont", "Eastlake", "Cleves",
  "Louisville", "Marion", "Marysville", "London", "Hartville",
  "Vandalia", "Warren", "Zanesville", "Uniontown", "Rocky River",
  "Streetsboro", "Solon", "Troy", "Reynoldsburg", "Springfield",
  "Richfield", "Steubenville", "Sheffield Lake", "Tiffin", "Twinsburg",
  "South Point", "Sidney", "Salem", "Toledo", "Sandusky",
  "Ravenna", "Powell", "Saint Clairsville", "Tipp City", "Sunbury",
  "Middletown", "Miamisburg", "Minster", "New Richmond", "Northfield",
  "North Royalton", "North Ridgeville", "Oxford", "Plain City", "Mogadore",
  "Painesville", "Perrysburg", "Pickerington", "Milford", "Morrow",
  "Pataskala", "New Albany", "Newark", "North Olmsted", "Munroe Falls",
  "New Carlisle", "Medina", "Novelty", "Dayton", "Euclid",
  "Elyria", "Greenville", "Fairfield", "Girard", "Galena",
  "Fairborn", "Cortland", "Dover", "Cuyahoga Falls", "Findlay",
  "Grove City", "Defiance", "Clinton", "Grafton", "Mansfield",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < ohioCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(ohioCities[i]);
}

module.exports = { batches };
