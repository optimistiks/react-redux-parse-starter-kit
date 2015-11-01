import Parse from 'parse';
import config from '../../../../config/index';

Parse.initialize(config.PARSE_APP_ID, config.PARSE_JS_KEY);

export default Parse;
