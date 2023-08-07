const { tsExtra } = require('./extra');
const { tsVanilla } = require('./vanilla');
const { tsStrict } = require('./strict');

const tsConfig = [tsVanilla, tsStrict, tsExtra];

module.exports = { tsConfig, tsVanilla, tsStrict, tsExtra };
