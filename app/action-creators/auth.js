import {AUTHENTICATED} from 'APP/app/constants';

export const authenticated = user => ({
  type: AUTHENTICATED, user
})