export const saveStoreToLocalStorage = (store) => (next) => (action) => {

    // if (action.type === 'LOAD_STATE_FROM_LOCAL_STORAGE') {
    //     if (localStorage.getItem('state') !== action.payload) {
    //         localStorage.setItem('state', action.payload);
    //     }
    // }

    return next(action);
};
