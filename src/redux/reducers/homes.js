import { SET_HOMES } from '../action-types';

const initialState = {
    homes: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HOMES: {
            return { ...state, homes: action.payload }
        }
        default: {
            return state;
        }
    }
};
