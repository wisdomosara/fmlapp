import { FETCH_FUNDEE_DASHBOARD_INFOS } from './types';
  
const initialState = {
       fundee:{},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_FUNDEE_DASHBOARD_INFOS:
            return {
                ...state,
                fundee: action.payload
            }
         default:
        return state;
    }
}

