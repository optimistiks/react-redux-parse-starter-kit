export default (type) => {
    return (payload) => {
        return {
            type,
            payload
        };
    };
};
