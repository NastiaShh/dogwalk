import { RegisteredUser, LoggedUser, User, UserRole } from './types/UserState';

export async function getUser(): Promise<
  | {
      isLoggedIn: true;
      user: User;
      role: UserRole
    }
  | {
      isLoggedIn: false;
    }
> {
  return (await fetch('/api/auth/user')).json();
}

export async function register(user: RegisteredUser): Promise<User> {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    console.log(result.error);
    throw new Error(result.error);
  }
}

export async function login(user: LoggedUser): Promise<User> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    console.log(result.error);
    throw new Error(result.error);
  }
}

export async function logout(): Promise<void> {
  const response = await fetch('/api/auth/logout', { method: 'POST' });

  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    console.log(result.error);
    throw new Error(result.error);
  }
}