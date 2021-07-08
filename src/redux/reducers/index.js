import { combineReducers } from "redux";

import homes from './homes';
import note from './note';
import realtors from './realtors';
import wishlist from './wishlist';


export const reducer = combineReducers({
    note,
    wishlist,
    homes,
    realtors
});
