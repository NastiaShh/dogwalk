import { RegisteredUser, LoggedUser, User } from './types/UserState';

export async function getUser(): Promise<
  | {
      isLoggedIn: true;
      user: User;
    }
  | {
      isLoggedIn: false;
    }
> {
  return (await fetch('/api/auth/user')).json();
}

export async function register(user: RegisteredUser): Promise<User> {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}

export async function login(user: LoggedUser): Promise<User> {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}

export async function logout(): Promise<void> {
  await fetch('/api/auth/logout', { method: 'POST' });
}
