import { TOGGLE_HOME_IN_WISHLIST } from '../action-types';

const initialState = {
    wishlist: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_HOME_IN_WISHLIST: {
            const updatedWishlist = state.wishlist.filter(el => el._id !== action.payload._id);

            if (updatedWishlist.length === state.wishlist.length) {
                updatedWishlist.push(action.payload);
            }

            return {...state, wishlist: updatedWishlist};
        }

        default: {
            return state;
        }
    }
};
