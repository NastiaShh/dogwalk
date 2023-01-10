export type RegisteredUser = {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordRepeat: string;
};

export type LoggedUser = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  role: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  photo?: string;
};

export type UserId = User['id'];
