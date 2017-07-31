import { FETCH_USER } from '../redux-actions/types'

export default function(state = null, action){
  switch (action.type) {
    case FETCH_USER:
    // let newState = {...state, ...action.payload}
    // console.log(newState);
    console.log(action.payload);
      return action.payload || false;
      break;
    default: return state

  }
}
