const request = require('request');

const nextISSTimesForMyLocation = (callback) => {

};

const fetchMyIP = function(callback) {
  const getIpURL = "https://api.ipify.org?format=json";
  request(getIpURL, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    
    // if non-200 status, assume server error and return msg
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    //parse the JSON packaged IP address into an object and store the value of the ip key in ipAddress variable
    const ipAddress = JSON.parse(body).ip;
    callback(null, ipAddress);
    // console.log(ipAddress);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  const geoURL = `https://freegeoip.app/json/${ip}`;
  request(geoURL, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    // if non-200 status, assume server error and return msg
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when retrieving lat/long. Response: ${response}`;
      callback(Error(msg), null);
      return;
    }
    
    const latLong = { latitude: JSON.parse(body).latitude, longitude: JSON.parse(body).longitude };
    callback(null, latLong);
  });
};

const fetchISSFlyOverTimes = (coords, callback) => {
  const ISSURL = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
  request(ISSURL, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when requesting flyovers. Response: ${response}`;
      callback(Error(msg), null);
      return;
    }
    const flyovers = JSON.parse(body).response;
    callback(null, flyovers);

  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };

// console.log("error:", error);
// console.log("status code", response && response.statusCode);
// console.log(body);