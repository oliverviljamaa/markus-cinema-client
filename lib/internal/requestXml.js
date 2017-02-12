const request = require('request-promise');


const requestXml = (url, options = {}) => request({ url, qs: options });

module.exports = requestXml;
