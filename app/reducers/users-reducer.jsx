import { RECEIVE_USERS } from '../constants';

const initialUsersState = [];

export default function (state = initialUsersState, action) {

  let newState = [];

  switch (action.type) {
    case RECEIVE_USERS:
      newState = action.users;
      break;

    default:
      return state;

  }

  return newState;

}
