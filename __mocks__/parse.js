jest.autoMockOff();

const Parse = require.requireActual('parse');
spyOn(Parse, 'initialize');
module.exports = Parse;

jest.autoMockOn();
