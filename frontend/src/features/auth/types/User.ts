type User = {
  id: number;
  email: string;
  role: string;
};

export type UserId = User['id'];

export default User;
