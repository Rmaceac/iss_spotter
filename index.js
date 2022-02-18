const { nextISSTimesForMyLocation } = require('./iss');
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
// const ipAddress = "107.190.19.199";
// const latLong = { latitude: 48.4152, longitude: -123.3655 };

const dateFormatter = (milliseconds) => {
  // convert to numbered format
  const date = new Date(milliseconds);
  // return date in string format
  return date.toString();
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  for (const pass of passTimes) {
    const duration = pass.duration;
    const dateString = dateFormatter(pass.risetime);
    console.log(`Next pass at ${dateString} for ${duration} seconds!`);
  }
  
});










// OLD TESTS FOR INDIVIDUAL FUNCTIONS IN ISS.JS

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP(ipAddress, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned lat/long:", coords);
// });

// fetchISSFlyOverTimes(latLong, (error, flyovers) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned the following flyover times:", flyovers);
// });
