import { SET_HOMES } from '../action-types';
import { homeService } from '../../services'

export const setHomes = () => async (dispatch) => {

            const data = await homeService.getAllHomes();
            dispatch({ type: SET_HOMES, payload: data});

}

