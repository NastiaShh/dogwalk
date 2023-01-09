import User from './User';

type AuthState = {
  authChecked: boolean;
  user?: User;
  role: string;
};

export default AuthState;
