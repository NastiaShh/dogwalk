type User = {
  id: number;
  email: string;
};

export type UserId = User['id'];

export default User;
