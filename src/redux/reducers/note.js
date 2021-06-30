import {TOGGLE_HOME_IN_NOTE} from "../action-types";

const initialState = {
    note: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_HOME_IN_NOTE: {
            const updatedNote = state.note.filter(el => el._id !== action.payload._id);

            if (updatedNote.length === state.note.length) {
                updatedNote.push(action.payload);
            }

            return {...state, note: updatedNote};
        }
        default: {
            return state;
        }
    }
};
