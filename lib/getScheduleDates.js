const requestXml = require('./internal/requestXml');
const parseXml = require('./internal/parseXml');


const getScheduleFromResult = result => result.dateTime;

const getScheduleDates = (url, options) =>
  requestXml(`${url}/ScheduleDates`, options)
    .then(parseXml)
    .then(getScheduleFromResult);

module.exports = getScheduleDates;
