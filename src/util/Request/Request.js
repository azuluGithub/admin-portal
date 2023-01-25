import axios from 'axios';

import { SIGNUP_REQUEST } from '../../route/SignUp/SignUp.config';
import { SIGNIN_REQUEST } from '../../route/SignIn/SignIn.config';
import { SIGNUP_ROUTE, SIGNIN_ROUTE  } from './Request.config';

const ENDPOINT_PORT =  process.env.REACT_APP_ENDPOINT_PORT;

const getRoute = args => {
  let route = '';
  const { authType } = args;

  switch(authType) {
    case SIGNUP_REQUEST:
      return route = SIGNUP_ROUTE;

    case SIGNIN_REQUEST:
      return route = SIGNIN_ROUTE;

    default:
      route = '';
  }

  return route;
}

export const executePost = async (args) => {
  const route = getRoute(args);

  return new Promise((resolve, reject) => {
    const config = {
      headers: { 'Content-Type': 'application/json' }
    }

    axios
    .post(`${ENDPOINT_PORT}${route}`, args, config)
    .then(({ data }) => resolve(data))
    .catch(error => reject(error.response.data));
  });
}
