import { User, UserRole } from './UserState';

type AuthState = {
  authChecked: boolean;
  user?: User;
  role: UserRole;
  loginError?: string;
  registerError?: string;
};

export default AuthState;
