import { RECEIVE_USERS } from '../constants';

const initialUsersState = [];

export default function (state = initialUsersState, action) {

  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USERS:
      newState.users = action.users;
      break;

    default:
      return state;

  }

  return newState;

}
