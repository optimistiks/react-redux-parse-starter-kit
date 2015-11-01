export const sampleReducer = function (state = {}, action) {

    switch (action.type) {

        case 'SAMPLE_ACTION':
            return action.payload;

        default:
            return state;

    }

};
