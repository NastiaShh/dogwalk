import { User } from './UserState';

type AuthState = {
  authChecked: boolean;
  user?: User;
  role: string;
  emailError?: string,
  loginError?: string,
};

export default AuthState;
