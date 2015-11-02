import Parse from '../parse-client/index';

export default () => {
    return Parse.User.current();
};
