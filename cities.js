const ohioCities = [
  "Smithville", "Spring Valley", "Ridgeway", "Rushville", "Quincy",
  "Saint Henry", "Struthers", "Pleasant City", "Trenton", "Stockport",
  "Scott", "Sarahsville", "Sherwood", "Richwood", "Scio",
  "Raymond", "Tuscarawas", "Rossford", "Rootstown", "Shreve",
  "Sabina", "Ray", "Urbana", "Fairview Park", "Salesville",
  "Richmond", "Rayland", "Pomeroy", "Rock Creek", "Russells Point",
  "Portsmouth", "Randolph", "Unionville Center", "Russia", "Upper Sandusky",
  "Saint Louisville", "Senecaville", "Sharon Center", "Southington", "Terrace Park",
  "Strasburg", "Ripley", "Reedsville", "Shiloh", "Rio Grande",
  "Rossburg", "Seaman", "Sandyville", "Van Buren", "Proctorville",
  "Plymouth", "Rawson", "Sugar Grove", "Port Clinton", "Republic",
  "Seville", "Shadyside", "Sugarcreek", "Stone Creek", "Prospect",
  "Radnor", "Utica", "Pleasant Hill", "Thornville", "Saint Paris",
  "Pedro", "Millersport", "Montpelier", "New Lexington", "North Lewisburg",
  "Pierpont", "Miamitown", "Nashport", "Negley", "Paulding",
  "Metamora", "Okeana", "Moscow", "Newbury", "Millersburg",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < ohioCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(ohioCities[i]);
}

module.exports = { batches };
