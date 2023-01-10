import { User, UserRole } from './UserState';

type AuthState = {
  authChecked: boolean;
  user?: User;
  role?: UserRole;
  emailError?: string,
  loginError?: string,
};

export default AuthState;
