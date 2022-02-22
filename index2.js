const { nextISSTimesForMyLocation } = require('./iss_promised');

const dateFormatter = (milliseconds) => {
  // convert to numbered format
  const date = new Date(milliseconds);
  // return date in string format
  return date.toString();
};

const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const duration = pass.duration;
    const dateString = dateFormatter(pass.risetime);
    console.log(`Next pass at ${dateString} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });