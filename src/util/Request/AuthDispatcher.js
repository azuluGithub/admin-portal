import { executePost } from './Request';

class AuthDispatcher {
  submitData(dispatch, args) {
    const postRes = executePost(args);

    postRes.then(
      (data) => this.onSuccess(dispatch, data),
      (error) => this.onError(dispatch, error),
    );
  }
}

export default AuthDispatcher;
