const CONFIG_PATH = '../../../../../config/index';

jest.dontMock('../index');
jest.dontMock(CONFIG_PATH);

describe('parse-client', () => {

    it('should initialize itself with keys from config', () => {

        const config = require(CONFIG_PATH).default;
        const Parse = require('../index').default;

        expect(Parse.initialize).toHaveBeenCalledWith(config.PARSE_APP_ID, config.PARSE_JS_KEY);

    });

});
