const ohioCities = [
  "Hamilton", "Lebanon", "Hudson", "Maineville", "Maumee",
  "Massillon", "Macedonia", "Kent", "Retired", "Norwich",
  "Grand Rapids", "Crestline", "Geneva", "Donnelsville", "Convoy",
  "Graytown", "Damascus", "East Claridon", "Coldwater", "Malvern",
  "Mcarthur", "Haverhill", "Laura", "Hanoverton", "Martins Ferry",
  "Mccomb", "Luckey", "Helena", "Junction City", "Masury",
  "Logan", "Lithopolis", "Kings Mills", "Jamestown", "Malta",
  "Lakeview", "Huntsburg", "Jefferson", "Maple Heights", "West Manchester",
  "West Point", "Vincent", "West Lafayette", "Windsor", "Wayne",
  "West Liberty", "Waynesfield", "Yorkshire", "West Union", "Wilberforce",
  "West Jefferson", "Vermilion", "Wauseon", "Somerville", "Whipple",
  "Stoutsville", "Pleasantville", "South Webster", "Spencer", "Thompson",
  "Rittman", "Sycamore", "Rockbridge", "Uhrichsville", "Portage",
  "Toronto", "Thurman", "Powhatan Point", "Somerset", "Sullivan",
  "Stewart", "Sardinia", "Pleasant Plain", "South Lebanon", "Saint Marys",
  "Risingsun", "Shelby", "The Plains", "South Vienna", "South Charleston",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < ohioCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(ohioCities[i]);
}

module.exports = { batches };
