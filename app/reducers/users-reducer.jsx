import { RECEIVE_USER } from '../constants';


const initialUsersState = {
  selectedUser: {
    name: '',
    email: '',
    isAdmin: false
  }
};

export default function (state = initialUsersState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      newState.selectedUser = action.user;
      break;

    default:
      return state;

  }

  return newState;

}
