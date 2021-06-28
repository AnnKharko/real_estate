import {combineReducers} from "redux";

import homes from './homes';
import note from './note';
import wishList from './wishList';


export const reducer = combineReducers({
    note,
    wishList,
    homes
})
