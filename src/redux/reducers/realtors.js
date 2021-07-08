import { SET_REALTORS } from '../action-types';

const initialState = {
    realtors: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_REALTORS: {
            return { ...state, realtors: action.payload }
        }
        default: {
            return state;
        }
    }
};

