import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer } from './reducers';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

export const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
});
export * from './action-types';
export * from './action-creators';

