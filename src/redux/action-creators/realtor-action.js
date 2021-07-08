import { SET_REALTORS } from '../action-types';

import { realtorService } from '../../services';

export const setRealtors = () => async (dispatch) => {
    const data = await realtorService.getAllRealtors();
    dispatch({type: SET_REALTORS, payload: data});
};
