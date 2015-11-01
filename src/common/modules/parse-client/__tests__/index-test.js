jest.dontMock('../index');
jest.dontMock('../../../../../config/index');

describe('parse-client', () => {

    it('should initialize itself with keys from config', () => {

        const config = require('../../../../../config/index');
        const Parse = require('../index');
        expect(Parse.initialize).toHaveBeenCalledWith(config.PARSE_APP_ID, config.PARSE_JS_KEY);

    });

});
