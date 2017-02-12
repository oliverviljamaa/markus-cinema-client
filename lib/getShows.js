const requestXml = require('./internal/requestXml');
const parseXml = require('./internal/parseXml');


const getShowsFromResult = result => result.Shows.Show;

const getShows = (url, options) =>
  requestXml(`${url}/Schedule`, options)
    .then(parseXml)
    .then(getShowsFromResult);

module.exports = getShows;
