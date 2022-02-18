const { nextISSTimesForMyLocation } = require('./iss');
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
// const ipAddress = "107.190.19.199";
// const latLong = { latitude: 48.4152, longitude: -123.3655 };

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});


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
