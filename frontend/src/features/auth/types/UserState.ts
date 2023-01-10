export type LoggedUser = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  role: string;
  name: string;
  password: string;
  photo?: string;
};

export type UserId = User['id'];
export type UserRole = User['role'];

