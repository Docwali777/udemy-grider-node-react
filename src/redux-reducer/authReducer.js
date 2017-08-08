import { FETCH_USER } from '../redux-actions/types'

export default function(state = null, action){
  switch (action.type) {
    case FETCH_USER:
    console.log('API/STRIPE- FETCH_USER',action.payload);
      return action.payload || false;
    default: return state

  }
}
