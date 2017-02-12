const Promise = require('bluebird');
const xml2js = require('xml2js');


const parser = new xml2js.Parser({ explicitRoot: false, explicitArray: false });

const parseXml = Promise.promisifyAll(parser).parseStringAsync;

module.exports = parseXml;
