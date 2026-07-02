const ohioCities = [
  "West Salem", "Waverly", "Wilkesville", "Westlake", "Wheelersburg",
  "West Unity", "Yellow Springs", "Zoar", "Waldo", "Waterford",
  "Wickliffe", "Waynesville", "Walbridge", "Wilmington", "Willow Wood",
  "Wooster", "Williamsfield", "Versailles", "West Farmington", "Wapakoneta",
  "Warsaw", "Wellsville", "Vickery", "Youngstown", "Vienna",
  "Westfield Center", "Weston", "Woodville", "Vinton", "West Alexandria",
  "Xenia", "Washington Court House", "Winchester", "Wellington", "Willard",
  "Williamsburg", "Woodsfield", "Wellston", "Ostrander", "Mcdermott",
  "Oregon", "Millfield", "Peninsula", "Norwalk", "New London",
  "New Bremen", "Mentor", "Leipsic", "La Rue", "Holgate",
  "Killbuck", "Kalida", "Holland", "Litchfield", "Jenera",
  "Lakeside Marblehead", "Lowell", "Kidron", "Independence", "Ludlow Falls",
  "Laurelville", "Hubbard", "Lower Salem", "Lockbourne", "Loveland",
  "Lyons", "Kenton", "Guysville", "Leesburg", "Mason",
  "Howard", "Marietta", "Loudonville", "Lowellville", "Lucas",
  "Lorain", "Kimbolton", "Hillsboro", "Huron", "Lima",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < ohioCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(ohioCities[i]);
}

module.exports = { batches };
