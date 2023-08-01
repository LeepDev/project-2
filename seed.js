require('dotenv').config();
require('./config/database');

const Golfer = require('./models/golfer')

// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');

// await needs an async function - use an async IIFE!
(async function() {
  // Save the promises (or call right in the array if feeling frisky)
  const resetGolfer = Golfer.deleteMany({});
  
  // Promise.all will return a single promise that resolves
  // only after all of the array's promises resolve
  let results = await Promise.all([resetGolfer]);
  // results will be an array of result objects!
  console.log(results);

  // This time, provide the array of promises in-line
  results = await Promise.all([
    Golfer.create(data.golfers)
  ]);
  console.log('Created golfers:', results[0])
  
  // Lastly, use process.exit() to "cleanly" shut down the Node program
  process.exit();
})();

